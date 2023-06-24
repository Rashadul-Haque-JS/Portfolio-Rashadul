import React from "react";
import Skills from "./Skills";

const Footer = () => {
  return (
    <div className="sm:py-4 sm:mt-8 mt-16  ">
      <Skills />
      <div
        className="bg-[#001D2D] py-20 "
        style={{
          fontFamily: "Montserrat, sans-serif",
          maxWidth: "1024px",
        }}
      >
        <div className="container mx-auto text-center">
        <p
              style={{
                fontSize: "18px",
                color: "white",
                lineHeight: "35px",
                margin: "0",
              }}
            >
              Rasahadul Haque
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "white",
                lineHeight: "35px",
                margin: "0",
              }}
            >
             Stockholm, Sweden
            </p>
          <div style={{ marginTop: "5%", marginBottom: "5%" }}>
          <h2
            style={{
              fontSize: "18px",
              color: "white",
              marginBottom: "1%",
            }}
          >
            Contact Me
          </h2>
            <p
              style={{
                fontSize: "15px",
                color: "white",
                lineHeight: "35px",
                margin: "0",
              }}
            >
             +46760168213
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
