import React from "react";
import Education from "../card/CardGeneral";
import educationData from "../../assets/data/education.json";
import Fade from "./FadeIn";
const EducationList = () => {
  return (
    <Fade>
      <div className="bg-white rounded-lg shadow-md pt-12 pb-20 mx-4 sm:mx-2 px-[15%] sm:px-8">
        {educationData.map((education) => (
          <Education key={education.id} data={education} />
        ))}
      </div>
    </Fade>
  );
};

export default EducationList;
