import React from "react";
import { ProjectViewBtnProps } from "../../types";

const ProjectViewBtn = ({ active, onClick, icon, label }:ProjectViewBtnProps) => {
  return (
    <button
      className={`w-[140px] border px-2 py-[4px] rounded-full text-[#FFF] flex justify-center items-center gap-3 ${
        active ? "border-b-2 border-b-[#FEF17F]" : ""
      }`}
      onClick={onClick}
    >
      <img src={icon} alt={label} className={`h-6 w-6 ${active ? "spinning" : ""}`} />
      <span className="w-fit uppercase">{label}</span>
    </button>
  );
};

export default ProjectViewBtn;
