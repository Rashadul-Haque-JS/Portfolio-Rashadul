import React from "react";

interface ButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}
const Button = ({ active, onClick, children }:ButtonProps) => {
  return (
    <button
      className={`${active ? "active" : "" } font-bold pt-2 pb-2 px-4 rounded-lg text-white ${active ? "bg-[#00293B]" : "bg-[#00495E]"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
