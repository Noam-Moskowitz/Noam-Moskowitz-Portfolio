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
    <div className="flex flex-col md:flex-row md:odd:flex-row-reverse items-center justify-center gap-10 p-10 border-b-2 ">
      <div className="flex justify-center min-h-[120px] w-[80vw] md:min-h-[70vh] md:w-[60%] ">
        {display}
      </div>
      <div className="flex flex-col items-start justify-start md:w-[50%] gap-5">
        <h2 className="font-bold text-lg md:text-2xl underline">{title}</h2>
        <h3 className="md:text-xl">{subtitle}</h3>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <RainbowButton>GitHub</RainbowButton>
        </a>
      </div>
    </div>
  );
};

export default ProjectContainer;
