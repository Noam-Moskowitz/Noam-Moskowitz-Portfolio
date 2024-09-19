import React from "react";

interface AboutParagrahProps {
  title: string;
  content: string;
}

const AboutParagrah: React.FC<AboutParagrahProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-5 p-5 border-l-4 md:first:border-none">
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default AboutParagrah;
