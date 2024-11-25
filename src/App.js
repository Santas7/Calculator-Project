import Display from "./components/Display/Display";
import './App.css'
import { useState } from "react";
import ButtonsContainer from "./components/Buttons/ButtonsContainer";

export default function App() {
  const [input, setInput] = useState("0");
  const [lastOperand, setLastOperand] = useState(null)

  const data = {
    input: input,
    setInput: (value) => setInput(value),
    setLastOperand: (value) => setLastOperand(value)
  }
  
  return (
    <div className="container">
      <Display {...data} />
      <ButtonsContainer {...data}/>
    </div>
  );
}
