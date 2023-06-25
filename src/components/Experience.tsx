import React from "react";
import Experience from "./card/GeneralCard";
import experienceData from "../assets/data/experience.json";
import Fade from "react-reveal/Fade";

const ExperienceList = () => {
  return (
    <Fade>
      <div className="bg-white rounded-lg shadow-md pt-12 pb-20 mx-4 sm:mx-2 px-[15%] sm:px-8">
        {experienceData.map((experience) => (
          <Experience key={experience.id} data={experience} />
        ))}
      </div>
    </Fade>
  );
};

export default ExperienceList;
