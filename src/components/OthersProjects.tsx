import React from 'react';
import OthersProjectCard from './card/OtherProjectCard';
import miscProjectsData from '../assets/data/miscProjects.json';


const OthersProjects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full mx-auto">
    {miscProjectsData.map((item:any)=>(
        <OthersProjectCard {...item}/>
    ))}
    </div>
  );
};

export default OthersProjects;