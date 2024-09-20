import React from "react";

interface ExperienceSectionProps {
  title: string;
  content: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col pl-12 border-l-2 border-primary">
      <h3 className="font-bold">{title}</h3>
      <p className="pl-10 pt-4">{content}</p>
    </div>
  );
};

export default ExperienceSection;
