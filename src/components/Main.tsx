import React, { useState } from "react";
import About from "./About";
import Button from "./NavButton";
import TechKnowledges from "./TechStack";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Recommendation from "./Recommendation";

const Main = () => {
  const [activeComponent, setActiveComponent] = useState("About");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="sm:mt-20 mt-28 min-h-[500px]">
      <div className="flex justify-center gap-8 mb-8 sm:px-4 sm:gap-4 flex-wrap">
        <Button
          active={activeComponent === "About"}
          onClick={() => handleComponentChange("About")}
        >
          About
        </Button>
        <Button
          active={activeComponent === "Tech"}
          onClick={() => handleComponentChange("Tech")}
        >
          Tech-Steck
        </Button>
        <Button
          active={activeComponent === "Projects"}
          onClick={() => handleComponentChange("Projects")}
        >
          Projects
        </Button>
        <Button
          active={activeComponent === "Experience"}
          onClick={() => handleComponentChange("Experience")}
        >
        Experience
        </Button>
        <Button
          active={activeComponent === "Education"}
          onClick={() => handleComponentChange("Education")}
        >
          Education
        </Button>
        <Button
          active={activeComponent === "Recommendation"}
          onClick={() => handleComponentChange("Recommendation")}
        >
          Rec
        </Button>
        {/* Add more buttons for other components */}
      </div>
      <div
        className="py-10 sm:py-8 "
        style={{
          background:
            "#034058",
        }}
      >
        {activeComponent === "About" && <About />}
        {activeComponent === "Tech" && <TechKnowledges />}
        {activeComponent === "Projects" && <Projects />}
        {activeComponent === "Experience" && <Experience/>}
        {activeComponent === "Education" && <Education/>}
        {activeComponent === "Recommendation" && <Recommendation/>}
        {/* Add conditional rendering for other components */}
      </div>
    </div>
  );
};

export default Main;
