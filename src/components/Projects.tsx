import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../assets/data/projects.json";

const ProjectList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md pt-12 pb-20 mx-4 sm:mx-2 flex justify-center items-center">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

