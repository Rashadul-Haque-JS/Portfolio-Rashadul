import React from "react";
import recData from "../assets/data/rec.json";
import Recommendation from "./card/RecCard";


const RecList = () => {
  return (
    
    <div className="bg-white rounded-lg shadow-md p-6 mx-4 sm:mx-2 px-[15%] sm:px-4">
      {recData.map((rec) => (
        <Recommendation key={rec.id} data={rec} />
      ))}
    </div>
   
  );
};

export default RecList;
