import { title } from "process";
import React from "react";

const TechComponent = ({title, tech}:any) => {
    return (
        <div className="mt-4">
         <p className="text-lg font-semibold text-gray-800 ">
            {title}:{" "}
            <span className="font-light">{tech}</span>
          </p>
        </div>
    );
}

export default TechComponent;