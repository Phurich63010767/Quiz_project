import React, { useState } from 'react';

const Quiz1 = () => {
  const [input, setInput] = useState('');
  const [triangle, setTriangle] = useState('');

  const generateTriangle = () => {
    const num = parseInt(input, 10);
    if (isNaN(num) || num <= 0) {
      setTriangle('Invalid input');
      return;
    }

    let result = '';
    if (num % 2 === 0) {
      for (let i = 1; i <= num; i++) {
        result += '*'.repeat(i) + '\n';
      }
    } else {
      for (let i = num; i > 0; i--) {
        result += '*'.repeat(i) + '\n';
      }
    }
    setTriangle(result);
  };

  return (
    <div>
      <h1>Quiz 1</h1>
      <div>
        <label>Number of Star: </label>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          
        />
        <button onClick={generateTriangle}>Go</button>
        <pre>{triangle}</pre>
      </div>
    </div>
  );
};

export default Quiz1;
