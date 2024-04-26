// create a button
import React from 'react';

interface ButtonProps {
  text: string; // specify text prop as a string
  onClick: () => void; // specify onClick prop as a function that takes no arguments and returns void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    
    </button>
  );
};

export default Button;

