import React from "react";

const RecCard = ({ data }: any) => {
  const addSpace = () => {
    const parts = data.speech.split("space");
    return parts.map((part: string, index: number) => (
      <span className="block mt-2" key={index}>
        {index === 0 && <span className="custom-quotation-mark">“</span>}
        {part}
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg px-6 py-6 sm:py-4 mb-6 shadow-sm">
      <blockquote className="font-normal leading-normal mb-4 text-start">
        {addSpace()}
        <span className="custom-quotation-mark">”</span>
      </blockquote>
      <p className="text-gray-800 font-medium text-sm">{data.name}</p>
      <div className="flex items-center gap-1 text-gray-500 text-sm sm:block">
        <p>{data.position}</p>
        <span className="text-gray-400 sm:hidden">&bull;</span>
        <p>{data.company}</p>
      </div>
      <small className="text-gray-600 mt-8 flex items-center">
        <span className="bg-green-500 rounded-full w-2 h-2 inline-block mr-2"></span>
        Recommendation on LinkedIn
      </small>
    </div>
  );
};

export default RecCard;
