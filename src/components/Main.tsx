import React, { useState } from "react";
import Skills from "./Skills";
import About from "./About";
import Button from "./NavButton";
import TechKnowledges from "./TechStack";

const Main = () => {
  const [activeComponent, setActiveComponent] = useState("About");

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="mt-20 min-h-[500px]">
      <div className="flex justify-center gap-8 mb-8">
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
          Skills
        </Button>
        {/* Add more buttons for other components */}
      </div>
      <div
        className="py-8 md:py-16 lg:py-20 mx-1 rounded-md"
        style={{
          background:
            "radial-gradient(circle, rgba(174,245,56,1) 38%, rgba(17,176,33,0.9304315476190477) 98%)",
        }}
      >
        {activeComponent === "About" && <About />}
        {activeComponent === "Tech" && <TechKnowledges />}
        {/* Add conditional rendering for other components */}
      </div>
    </div>
  );
};

export default Main;
