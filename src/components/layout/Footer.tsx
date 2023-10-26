import React from "react";
import Skills from "../SkillsView";

const Footer = () => {
  return (
    <div className="sm:pt-4 sm:mt-8 mt-16">
      <Skills />
      <div className="bg-[#1c295a] flex flex-col justify-center items-center py-20">
        <div className="container mx-auto text-center">
          <p className="text-white text-lg font-semibold mb-2 sm:text-xl tracking-wide">
            Rashadul Haque
          </p>
          <p className="text-white text-base mb-4">Stockholm, Sweden</p>
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-lg text-[#FEF17F] font-semibold mb-2 sm:text-xl tracking-wide">
              To Contact
            </h2>
            <p className="text-white text-base mb-1">Phone: +46 760 168 213</p>
            <p className="text-white text-base">Email: rashadulhaq.dev@gmail.com</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;

