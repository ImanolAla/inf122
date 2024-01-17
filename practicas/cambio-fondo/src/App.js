import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleBlackButtonClick = () => {
    setBackgroundColor('#000000');
  };

  const handleWhiteButtonClick = () => {
    setBackgroundColor('#ffffff');
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Cambio de Fondo</h1>
      <button onClick={handleBlackButtonClick}>Fondo Negro</button>
      <button onClick={handleWhiteButtonClick}>Fondo Blanco</button>
    </div>
  );
};

export default App;
