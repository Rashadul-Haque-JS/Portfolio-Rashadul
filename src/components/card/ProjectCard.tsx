import React, { useEffect, useState } from "react";
import { ProjectCardProps } from "../../types";
import live from "../../assets/images/globe.png";


const ProjectCard = ({ item }: ProjectCardProps) => {
  const [hover, setHover] = useState(false);
  const imagePath = require(`../../assets/images/${item.image}`);

  useEffect(() => {
    const handleTouchMove = () => {
      setHover(false);
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0rem 2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    transform: hover ? "scale(0.99)" : "scale(1)",
    height: "620px",
    background: "#003545",
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: "#000",
    color: "#FFF",
    padding: "0.2rem 1.5rem ",
    borderRadius: "0.25rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "bold",
    transition: "transform 0.3s ease",
    transform: hover ? "scale(0.99)" : "scale(1)",
  };
  const linksStyle: React.CSSProperties = {
    backgroundColor: hover ? "#FEF17F" : "transparent",
    color: hover ? "#000000" : "#FEF17F",
    padding: "0.5rem 1.5rem ",
    borderRadius: "0.25rem",
    marginBottom: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    transition: "transform 0.3s ease",
    transform: hover ? "scale(0.99)" : "scale(1)",
  };

  const tagStyle: React.CSSProperties = {
    color: "white",
    padding: "0.25rem 0.5rem",
    fontSize: "0.75rem",
    textAlign: "center",
  };

  const imageContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "240px", // Adjust the desired height here
    marginBottom: "4px", // Adjust the desired margin here
  };
  return (
  
      <div
        style={cardStyle}
        className={`hover:border-gray-800 ${hover ? "border-gray-800" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover(!hover)}
      >
        {!hover && (
          <div
            className="flex flex-col justify-center items-center gap-3"
            style={linksStyle}
          >
            <img
              className=" w-6 h-6 rounded-full border z-30"
              src={live}
              alt="live logo"
            />
            <div className="uppercase text-[20px]">{item.overlay}</div>
          </div>
        )}
        {hover && (
          <a
            className="text-xs"
            href={item.github_url}
            target="_blank"
            rel="noreferrer"
            style={linksStyle}
            onTouchStart={(e) => {
              e.stopPropagation();
              setHover(true);
            }}
          >
            <span className="z-30 text-[18px] font-bold">🔗</span>{" "}
            <span className="z-30 text-[18px] font-bold">CODE</span>
          </a>
        )}
        <div
          className="flex justify-center items-center relative"
          style={imageContainerStyle}
        >
          {hover && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              style={overlayStyle}
              className="absolute top-0 right-0 w-full h-full flex justify-center items-center gap-1 opacity-70 "
              onTouchStart={(e) => {
                e.stopPropagation();
                setHover(true);
              }}
            >
              <span className="z-30 text-[20px] font-bold">🔗</span>{" "}
              <span className="z-30 text-[20px] font-bold">SITE</span>
            </a>
          )}
          <img
            className="w-3/4 h-auto mb-4 rounded-md"
            src={imagePath}
            alt={item.overlay}
          />
        </div>

        <h2 className="text-white">{item.title}</h2>
        <p className="py-4 text-[#FEF17F]" style={{ lineHeight: "20px" }}>
          {item.description}
        </p>
        <div className="flex justify-start items-center flex-wrap w-full">
          {item.tags.map((tag: any) => (
            <span key={tag} style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    
  );
};

export default ProjectCard;
