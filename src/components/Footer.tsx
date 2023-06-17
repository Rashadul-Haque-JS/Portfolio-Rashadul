import React from "react";
import Skills from "./Skills";

const Footer = () => {
  return (
    <div className="sm:py-10 mt-28 ">
      <Skills />
      <div
        className="bg-[#001D2D] py-20 "
        style={{
          fontFamily: "Montserrat, sans-serif",
          maxWidth: "1024px",
        }}
      >
        <div className="container mx-auto text-center">
          <h2
            style={{
              fontSize: "18px",
              color: "white",
              marginBottom: "5%",
            }}
          >
            Contact Me
          </h2>
          <div style={{ marginTop: "5%", marginBottom: "5%" }}>
            <p
              style={{
                fontSize: "16px",
                color: "white",
                lineHeight: "35px",
                margin: "0",
              }}
            >
              Rasahadul Haque
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "white",
                lineHeight: "35px",
                margin: "0",
              }}
            >
             Stockholm, Sweden
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "white",
                lineHeight: "35px",
                margin: "0",
              }}
            >
              rashadulhaq.dev@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
