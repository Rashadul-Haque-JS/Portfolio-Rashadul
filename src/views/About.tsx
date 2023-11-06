import React from "react";
import Fade from "./FadeIn";
const About = () => {
  return (
    <Fade>
      <div className="bg-white rounded-lg shadow-md pt-12 pb-20 mx-4 sm:mx-2">
        <p className="sm:px-6 md:px-16 px-[15%] pb-3 font-light leading-normal">
          I am Rashadul Haque, a driven developer committed to continuous
          learning and improvement. Having recently completed my studies in
          full-stack JavaScript development, I've acquired hands-on experience
          with technologies such as React, TypeScript, Next.js, NodeJs and PHP, enhancing my
          ability to craft engaging, interactive user interfaces.
        </p>
        <p className="sm:px-6 md:px-16 px-[15%] py-3  font-light leading-normal">
          During my journey in backend development, I have worked extensively
          with Node.js and PHP, gaining proficiency in frameworks such as
          Express.js and Laravel. These experiences have inspired me to create
          powerful and efficient web applications.
        </p>
        <p className="sm:px-6 md:px-16 px-[15%] py-3 font-light leading-normal">
          Additionally, I have knowledge in developing microservices and
          implementing a modular and scalable microservice architecture.
          Furthermore, I have a strong skill set in various services offered by
          Amazon Web Services (AWS), enabling me to design and deploy
          cloud-based solutions efficiently, ensuring optimal performance,
          scalability, and security for web applications and services.
        </p>
      </div>
    </Fade>
  );
};

export default About;
