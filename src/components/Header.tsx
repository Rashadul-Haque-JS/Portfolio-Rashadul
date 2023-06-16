import React from "react";
import myImg from "../assets/images/rashadul.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="app-header border shadow-md text-white p-8 flex sm:justify-center items-center sm:items-start relative sm:h-[300px]">
      <img
        className="profile-img w-[240px] h-[240px] sm:w-40 sm:h-40 md:w-64 md:h-64 p-0 rounded-tl-lg rounded-tr-lg z-30"
        src={myImg}
        alt="Rashadul Haque"
      />
      <div className="flex flex-col justify-center sm:justify-start ml-4 sm:ml-0 z-30">
        <h1 className="text-2xl sm:text-xl text-center sm:text-start sm:ps-0">
          RASHADUL HAQUE
        </h1>
        <p className="text-5xl sm:text-4xl font-bold sm:w-64 md:w-64 mt-4 text-center sm:text-start">
          Full Stack Developer
        </p>
      </div>
      <div className="flex justify-center items-center gap-6 absolute top-4 right-48 md:right-40 sm:static z-30">
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
