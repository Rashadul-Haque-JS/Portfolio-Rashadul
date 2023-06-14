
import React from "react";

const Skills = () => {
  return (
    <div className="bg-lime-600 py-8 my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">SKILLS</h2>
        <div className="grid grid-cols-2 place-items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-white">
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Problem-solving</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Hard Skills</h3>
            <ul className="list-disc list-inside text-white">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
