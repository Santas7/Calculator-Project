import Button from "./Button/Button";
import './Buttons.css'

export default function Buttons({
    handleButtonClick,
    handleClear,
    handleChangeMark,
    handlePercentage,
    handleCalculate
}) {
    return (
        <div className="buttons">
            <Button text="C" type="clear" onClick={handleClear} />
            <Button text="+/-" type="change" onClick={handleChangeMark} />
            <Button text="%" type="procent" onClick={handlePercentage} />
            <Button text="÷" type="operator" onClick={() => handleButtonClick('÷')} />

            <Button text="7" type="digit" onClick={() => handleButtonClick('7')} />
            <Button text="8" type="digit" onClick={() => handleButtonClick('8')} />
            <Button text="9" type="digit" onClick={() => handleButtonClick('9')} />
            <Button text="x" type="operator" onClick={() => handleButtonClick('*')} />

            <Button text="4" type="digit" onClick={() => handleButtonClick('4')} />
            <Button text="5" type="digit" onClick={() => handleButtonClick('5')} />
            <Button text="6" type="digit" onClick={() => handleButtonClick('6')} />
            <Button text="-" type="operator" onClick={() => handleButtonClick('-')} />

            <Button text="1" type="digit" onClick={() => handleButtonClick('1')} />
            <Button text="2" type="digit" onClick={() => handleButtonClick('2')} />
            <Button text="3" type="digit" onClick={() => handleButtonClick('3')} />
            <Button text="+" type="operator" onClick={() => handleButtonClick('+')} />

            <Button text="0" type="digit" onClick={() => handleButtonClick('0')} />
            <Button text="." type="digit" onClick={() => handleButtonClick('.')} />
            <Button text="=" type="equals" onClick={handleCalculate} />
        </div>
    )
}