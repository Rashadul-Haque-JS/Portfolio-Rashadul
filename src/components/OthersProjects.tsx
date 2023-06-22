import React, { useState } from 'react';
import OthersProjectCard from './card/OtherProjectCard';

const data = [
    {
      image: "",
      title: "Example Title 1",
      shortDesc: "This is a short description for object 1.This is a short description for object 1.This is a short description for object 1.",
      url: "#"
    },
    {
      image: "",
      title: "Example Title 2",
      shortDesc: "This is a short description for object 2.This is a short description for object 1.This is a short description for object 1.",
      url: "#"
    },
    {
      image: "",
      title: "Example Title 3",
      shortDesc: "This is a short description for object 3.This is a short description for object 1.This is a short description for object 1.",
      url: "#"
    }
  ];
const OthersProjects = () => {
    const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full mx-auto">
    {data.map((item:any)=>(
        <OthersProjectCard {...item}/>
    ))}
    </div>
  );
};

export default OthersProjects;