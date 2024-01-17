import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  return (
<div className="calculator">
      <div className="input">{input}</div>
      <div className="result">Resultado: {result}</div>
      <div className="buttons">
        <button className="number" onClick={() => handleButtonClick('1')}>1</button>
        <button className="number" onClick={() => handleButtonClick('2')}>2</button>
        <button className="number" onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        <button className="number" onClick={() => handleButtonClick('4')}>4</button>
        <button className="number" onClick={() => handleButtonClick('5')}>5</button>
        <button className="number" onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        <button className="number" onClick={() => handleButtonClick('7')}>7</button>
        <button className="number" onClick={() => handleButtonClick('8')}>8</button>
        <button className="number" onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        <button className="number" onClick={() => handleButtonClick('0')}>0</button>
        <button className="number" onClick={() => handleButtonClick('.')}>.</button>
        <button className="equal" onClick={handleCalculate}>=</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default App;
