import React from "react";
import { ExperienceProps } from "../types";
const Experience = ({ data }: ExperienceProps) => {
  return (
    <div className="experience bg-white rounded-lg  p-4 mb-4">
      <h2 className="text-2xl font-bold">{data.position}</h2>
      <h3 className="text-lg font-medium text-gray-600">
        {data.company} - {data.place}
      </h3>
      <h4 className="text-md font-medium text-gray-600">{data.date}</h4>
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h5>{data.contact}</h5>
        &bull;
        <h5>{data.locationType}</h5>
      </div>
      {Array.isArray(data.description) ? (
        <ul className="list-disc pl-6 mt-6">
          {data.description.map((desc, index) => (
            <li key={index} className="text-gray-800">
              {desc}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-800">{data.description}</p>
      )}
    </div>
  );
};

export default Experience;
