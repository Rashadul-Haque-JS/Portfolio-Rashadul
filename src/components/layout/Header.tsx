import React, { useState, useEffect, useRef } from "react";
import myImg from "../../assets/images/rashadul.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/programming.png";
import Fade from "../views/FadeIn";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [showHello, setShowHello] = useState(true);
  const text = "Full Stack Developer";
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (!showHello) {
      const displayTextRecursive = (currentIndex: number) => {
        if (currentIndex < text.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText((prevText) => prevText + text[currentIndex]);
            displayTextRecursive(currentIndex + 1);
          }, 100);
        }
      };

      setDisplayText("");
      displayTextRecursive(0);
    } else {
      setTimeout(() => {
        setShowHello(false);
      }, 2500);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [showHello]);

  return (
    <header className="app-header border shadow-md text-[#FFFFFF] p-8 flex sm:justify-between items-center sm:items-start relative sm:h-[300px]">
      {showHello && (
        <div className="absolute inset-0 flex flex-col justify-center items-center app-header-init z-30 sm:h-full">
          <h1 className="text-8xl sm:text-6xl transform sm:translate-y-[-12px]">
            Hello
          </h1>
          <p className="block py-2 text-4xl sm:text-3xl text-[#FFFF00] capitalize transform sm:translate-y-[-12px]">
            Welcome to my portfolio
          </p>
        </div>
      )}
      <img
        className={`w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border absolute bottom-6 sm:left-8 md:left-16 left-12 z-30 personal-brand ${
          !showHello ? "fade-out" : ""
        }`}
        src={logo}
        alt="personal logo"
      />
      {!showHello && (
        <img
          className={`profile-img w-[180px] h-[180px] 3xl:w-[210px] 3xl:h-[210px] sm:w-28 sm:h-28 md:w-48 md:h-48 p-0 z-30 ${
            !showHello ? "fade-out" : ""
          }`}
          src={myImg}
          alt="Rashadul Haque"
        />
      )}
      <Fade>
        {!showHello && (
          <div
            className={`flex flex-col justify-center sm:justify-start ml-4 sm:ms-0 z-30 `}
          >
            <h1 className="text-2xl sm:text-xl text-start sm:ps-0 custom-txt text-[#FFFF00] sm:tracking-tight md:tracking-tight">
              RASHADUL HAQUE
            </h1>

            <p className="text-[2rem] sm:text-[1.8rem] custom-txt sm:w-64 md:w-64 mt-4 text-start uppercase">
              {displayText}
            </p>
          </div>
        )}
      </Fade>

      <div className="flex justify-center items-center gap-4 absolute sm:top-4 top-6 right-32 md:right-24 sm:static z-30">
        <a href="https://github.com/Rashadul-Haque-JS">
          <FaGithub size={24} className="rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/rashadul-haque-905642137/">
          <FaLinkedin size={24} className="rounded-full" />
        </a>
      </div>
    </header>
  );
};

export default Header;
