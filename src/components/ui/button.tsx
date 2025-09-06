import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={`transition-colors duration-200 ${props.className}`}>
      {children}
    </button>
  );
};
