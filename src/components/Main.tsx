import React, { useEffect, useState } from "react";
import About from "./About";
import Button from "./NavButton";
import TechKnowledges from "./TechStack";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Recommendation from "./Recommendation";
import OthersProjects from "./OthersProjects";
import uxDesign from "../assets/images/figma.png";
import live from "../assets/images/globe.png";
import codebase from "../assets/images/programming.png";
import ProjectViewBtn from "./button/projectViewBtn";
import Fade from "./FadeIn";

const Main = () => {
  const [othersProjects, setOthersProjects] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Projects");
  const [showMessage, setShowMessage] = useState(false);

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  useEffect(() => {
    if (activeComponent === 'Projects' && !othersProjects) {
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, [activeComponent, othersProjects]);

  return (
    <div className="sm:mt-20 md:mt-24 mt-[6.5rem] min-h-[500px]">
      <Fade>
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
            Tech-Stack
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
      </Fade>

      <div
        className="py-8"
        style={{
          background: "#003545",
        }}
      >
        {activeComponent === "Projects" && (
          <div className="flex justify-center items-start mb-5 text-slate-50 gap-4 font-semibold">
            <ProjectViewBtn
              active={!othersProjects}
              onClick={() => setOthersProjects(false)}
              icon={live}
              label="website"
            />
            <ProjectViewBtn
              active={othersProjects}
              onClick={() => setOthersProjects(true)}
              label="others"
              icon={codebase}
            />
          </div>
        )}
        {activeComponent === "Tech" && (
          <div className="flex justify-center items-start mb-5 text-[#FEF17F] gap-4 font-semibold text-sm uppercase">
            Technologies I Work With
          </div>
        )}

        {showMessage && (
          <p className="text-center mb-5 text-[#4FD9E4] font-semibold text-sm">
            Please note that not all projects are designed<span className="sm:block"> for mobile devices!</span>
          </p>
        )}

        {activeComponent === "About" && <About />}
        {activeComponent === "Tech" && <TechKnowledges />}
        {activeComponent === "Projects" && !othersProjects && (
          <Fade>
            <Projects />
          </Fade>
        )}
        {activeComponent === "Projects" && othersProjects && (
          <Fade>
            <OthersProjects />
          </Fade>
        )}
        {activeComponent === "Experience" && <Experience />}
        {activeComponent === "Education" && <Education />}
        {activeComponent === "Recommendation" && (
          <Fade>
            <Recommendation />
          </Fade>
        )}
        {activeComponent === "Projects" && othersProjects && (
          <div className="my-6 text-center">
            <a
              className="py-2 text-blue-400 underline"
              href="https://github.com/Rashadul-Haque-JS"
            >
              More projects on Github
            </a>
          </div>
        )}
      </div>
      <Fade>
        <div className="flex justify-center items-center my-8 py-12 relative">
          <img
            className="w-full h-auto"
            src={uxDesign}
            alt="UX design"
            style={{ border: "solid #5618F0 2px" }}
          />
          <div className="flex justify-center items-start gap-4 sm:gap-2  absolute top-20 left-8 sm:top-4 md:top-18 ">
            <h2 className=" sm:text-sm md:text-sm text-md font-bold text-white sm:text-black mb-4">
              E-Commerce UX Project Design
            </h2>
            <a
              className="text-[#FEF17F] sm:text-[#5618f0] sm:text-sm font-semibold "
              href="https://www.figma.com/file/xxXt5Xs3aSr9twt7n8ilCw/Sinus_webshop-(Template)?type=design&node-id=83%3A3121&mode=design&t=asH98uozDjQ1kxtH-1"
            >
              🔗 Design Link
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Main;
