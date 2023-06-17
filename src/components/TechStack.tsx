import React from "react";
import TechComponent from "./Tech";
import { techData } from "../assets/data/tech";

const TechKnowledges = () => {
  return (
    <div className="container mx-auto px-4 sm:px-2 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6 sm:ps-12  px-[15%]">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
          {techData.map((tech: any, index: number) => (
            <TechComponent key={index} title={tech.title} tech={tech.tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechKnowledges;
