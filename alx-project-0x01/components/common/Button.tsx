import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
