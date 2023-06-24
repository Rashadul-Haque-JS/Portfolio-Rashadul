import React, { useEffect, useState } from "react";
import { OtherProjectProps } from "../../types";

const OthersProjectCard = ({
  title,
  shortDesc,
  url,
}: OtherProjectProps) => {
  const [hover, setHover] = useState(false);
  const imagePath = require(`../../assets/images/program.png`);

  useEffect(() => {
    const handleTouchMove = () => {
      setHover(false);
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className="relative w-5/6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(!hover)}
    >
      <div className="h-40 sm:h-80 bg-gray-200 hover:bg-[#FEF17F] rounded-lg flex sm:flex-col justify-between items-center px-8 py-4 sm:px-4 sm:py-8 sm:text-center sm:gap-5">
        <div className="w-1/2 ">
        <img
          src={imagePath}
          alt="Card Image"
          className="object-cover rounded-lg sm:w-full w-[140px]"
        />
        </div>
        <div className="text-start w-1/2 sm:w-full sm:text-center">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm mr-8">{shortDesc}</p>
        </div>
      </div>

      {hover && (
        <div className="absolute top-0 right-0 w-full h-full bg-gray-800 text-white bg-opacity-90 flex justify-center items-center rounded-lg" style={{border:'solid 8px #1DB5C6'}}>
          <a
            href={url}
            className="px-8 py-2 rounded-lg bg-[#1DB5C6] text-black font-bold"
            onTouchStart={(e) => {
              e.stopPropagation();
              setHover(true);
            }}
          >
            <span role="img" aria-label="link">🔗</span> <span>CODE</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default OthersProjectCard;
