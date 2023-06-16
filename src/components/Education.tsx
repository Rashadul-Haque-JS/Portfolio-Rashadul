import React from "react";
import Education from "./GeneralCard";
import educationData from "../assets/data/education.json";

const EducationList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md pt-12 pb-20 mx-4 sm:mx-2 px-[15%] sm:px-8">
        {educationData.map((education) => (
            <Education key={education.id} data={education} />
        ))}
      
    </div>
  );
};

export default EducationList;