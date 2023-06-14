import React from "react";

interface ButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}
const Button = ({ active, onClick, children }:ButtonProps) => {
  return (
    <button
      className={`btn-toggle ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
