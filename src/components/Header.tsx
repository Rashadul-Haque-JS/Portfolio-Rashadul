import React from "react";
import myImg from "../assets/images/rashadul.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/programming.png";
import Fade from "./FadeIn";

const Header = () => {
  return (
    <header className="app-header border shadow-md text-white p-8 flex sm:justify-center items-center sm:items-start relative sm:h-[300px]">
      <img
        className=" w-10 h-10 rounded-full border absolute bottom-6 sm:left-8 md:left-16 left-12 z-30"
        src={logo}
        alt="personal logo"
      />
      <img
        className="profile-img w-[200px] h-[200px] sm:w-32 sm:h-32 md:w-56 md:h-56 p-0  z-30"
        src={myImg}
        alt="Rashadul Haque"
      />
      <Fade>
        <div className="flex flex-col justify-center sm:justify-start ml-4 sm:ml-0 z-30">
          <h1 className="text-2xl sm:text-xl text-center sm:text-start sm:ps-0 font-semibold">
            RASHADUL HAQUE
          </h1>
          <p className="text-5xl sm:text-4xl font-bold sm:w-64 md:w-64 mt-4 text-center sm:text-start">
            Full Stack Developer
          </p>
        </div>
      </Fade>

      <div className="flex justify-center items-center gap-6 absolute sm:top-4 top-6 right-48 md:right-40 sm:static z-30">
        <a href="https://github.com/Rashadul-Haque-JS">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rashadul-haque-905642137/">
          <FaLinkedin size={24} className="rounded-full" />
        </a>
      </div>
      <div className="absolute w-full h-full top-0 right-0 bg-[#000] opacity-10"></div>
    </header>
  );
};

export default Header;
