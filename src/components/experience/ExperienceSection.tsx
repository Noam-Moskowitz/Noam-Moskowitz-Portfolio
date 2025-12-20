import React from "react";

interface ExperienceSectionProps {
  title: string;
  content: string | string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col pl-5 md:pl-12 border-l-2 border-divider">
      <h3 className="font-bold">{title}</h3>
      {typeof content == "string" ? (
        <p className="md:pl-10 pt-4">{content}</p>
      ) : (
        content.map((item) => (
          <ul>
            <li className="md:ml-10 ml-4 pt-4 list-disc">{item}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default ExperienceSection;
