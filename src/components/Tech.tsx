import React from "react";
import Fade from "./FadeIn";

const TechComponent = ({ title, tech }: any) => {
  const techList = tech.split(" • ");

  const getSymbol = (title: string) => {
    switch (title) {
      case "Languages":
        return "{  }";
      case "Frontend-Frame":
        return "🖥️";
      case "Backend-Frame":
        return "⚙️";
      case "Styles":
        return "💅";
      case "Database":
        return "🗃️";
      case "Testing":
        return "✅";
      case "Deploy":
        return "🚀";
      case "Agile":
        return "🔄";
      case "Tools":
        return "🛠️";
      default:
        return "";
    }
  };

  const symbol = getSymbol(title);

  return (
    <Fade>
      <div className="bg-white rounded-lg shadow-md pt-4 pb-4">
        <div className="flex justify-center items-center gap-2 bg-[#275368] text-white text-center py-2 px-4 w-full rounded-tl-lg rounded-tr-lg">
          <span className="text-lg font-semibold">{symbol}</span>
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <ul className="ml-12 sm:ml-8 sm:pr-4 list-disc text-sm text-gray-600 mt-4">
          {techList.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Fade>
  );
};

export default TechComponent;

// Compare this snippet from src/components/skills.tsx:
