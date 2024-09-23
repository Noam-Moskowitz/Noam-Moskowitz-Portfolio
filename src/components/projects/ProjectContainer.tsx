import React from "react";
import { RainbowButton } from "../magicui/rainbow-button";

interface ProjectContainerProps {
  title: string;
  display: any;
  content: string;
  link: string;
  subtitle?: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  title,
  display,
  content,
  link,
  subtitle,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse md:w-2/3  items-center justify-center p-5">
      <div className="flex justify-center md:w-[50%]">{display}</div>
      <div className="flex flex-col items-start justify-start md:w-[50%] gap-5">
        <h2 className="font-bold text-3xl underline">{title}</h2>
        <h3 className="text-2xl">{subtitle}</h3>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <RainbowButton>GitHub</RainbowButton>
        </a>
      </div>
    </div>
  );
};

export default ProjectContainer;
