import { useState } from "react";
import Buttons from "./Buttons";

export default function ButtonsContainer({ 
    input, 
    setInput, 
    setLastOperand 
}) {
    function handleButtonClick(value) {
        if (input === "0" && value !== '.') {
            setInput(value);
        } else {
            setInput(input + value);
        }
    }

    function handleClear() {
        setInput("0");
        setLastOperand(null);
    }

    function handleChangeMark() {
        setInput((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    }

    function handlePercentage() {
        setInput((prev) => {
            const parts = prev.split(' ');
            const number = parseFloat(parts[parts.length - 1]);
            if (isNaN(number)) return "Error";
            return prev + " %";
        });
    }

    function handleCalculate() {
        try {
            const sanitizedInput = input.replace('÷', '/').replace('x', '*');
            if (sanitizedInput.includes('%')) {
                let [part1, part2] = sanitizedInput.split('%')[0].split("-")
                let result = parseFloat(part1 - part1 * part2 / 100)
                setInput(result.toString())
            } else {
                setInput(eval(sanitizedInput).toString())
            }
        } catch (e) {
            setInput("Error");
        }
    }

    const data = {
        handleButtonClick,
        handleClear,
        handleChangeMark,
        handlePercentage,
        handleCalculate
    };
    
    return <Buttons {...data}/>
}