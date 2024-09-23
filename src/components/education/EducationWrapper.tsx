import React from "react";
import EducationSection from "./EducationSection";
import { educationArr } from "@/constants/education";
import Particles from "../magicui/particles";

const EducationWrapper = () => {
  return (
    <div
      id="education"
      className="bg-background-1 relative border-y-8 border-divider p-10 overflow-hidden"
    >
      <h3 className="text-4xl font-bold">Education</h3>
      {educationArr.map((item, i) => (
        <EducationSection
          key={i}
          title={item.title}
          description={item.description}
          grade={item.grade}
          period={item.period}
        />
      ))}
      <Particles
        className="absolute top-0  w-full"
        quantity={300}
        ease={80}
        color="black"
        refresh
      />
    </div>
  );
};

export default EducationWrapper;
