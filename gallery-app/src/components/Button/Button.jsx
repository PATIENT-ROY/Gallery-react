import React, { useState } from 'react';

export const Button = () => {
 
  const [age, setAge] = useState(42);

  const handleIncrement = () => {
    setAge(age + 10);
  };

  const handleReset = () => {
    setAge(0);
  };

  const handleDecrement = () => {
    setAge(age - 5);
  };

  return (
    <div>
      <p>Count: {age}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};