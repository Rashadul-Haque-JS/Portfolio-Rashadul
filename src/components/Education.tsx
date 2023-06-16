import React from "react";
import Education from "./GeneralCard";
import experienceData from "../assets/data/experience.json";

const EducationList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md pt-12 pb-20 mx-4 sm:mx-2 px-[15%] sm:px-8">
        {experienceData.map((experience) => (
            <Education key={experience.id} data={experience} />
        ))}
      
    </div>
  );
};

export default EducationList;