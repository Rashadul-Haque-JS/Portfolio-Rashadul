import React, { useState } from "react";
import { ProjectCardProps } from "../types";
const ProjectCard = ({ item }: ProjectCardProps) => {
  const [hover, setHover] = useState(false);
  const imagePath = require(`../assets/images/${item.image}`);

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    transform: hover ? "scale(0.95)" : "scale(1)",
    cursor: "pointer",
    height: "auto",
    background: "#547D8E",
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: hover ? "#003333" : "transparent",
    color: hover ? "white" : "#FF9100",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    marginBottom: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    transition: "transform 0.3s ease",
    transform: hover ? "scale(0.95)" : "scale(1)",
  };

  const tagStyle: React.CSSProperties = {
    color: "white",
    padding: "0.25rem 0.5rem",
    fontSize: "0.75rem",
    textAlign: "center",
  };

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div
        style={cardStyle}
        className={`hover:border-gray-800 ${hover ? "border-gray-800" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover(true)}
        onTouchEnd={() => setHover(false)}
      >
        <div className="project-overlay" style={overlayStyle}>
          {item.overlay}
        </div>
        <img
          className="w-full h-auto mb-4"
          src={imagePath}
          alt={item.overlay}
        />
        <h2 className="text-white">{item.title}</h2>
        <p className="py-4 text-[#FF9100]">{item.description}</p>
        <div className="flex justify-start items-center flex-wrap w-full">
          {item.tags.map((tag: any) => (
            <span key={tag} style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
