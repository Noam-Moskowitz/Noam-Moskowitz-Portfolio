import React from "react";
import NumberTicker from "../magicui/number-ticker";

const EducationSection = () => {
  return (
    <div className="flex items-center py-5 gap-8">
      <img
        className="w-[100px] rounded-full border-2 border-lime-700"
        src="./src/images/hacker-u-logo-small.png"
        alt=""
      />
      <div className="border-l-2 border-primary px-8">
        <h1 className="font-bold">Full Stack Web Developer , 535H - HackerU</h1>
        <h2 className="">May 2023 - Aug 2024</h2>
        <h3 className="pt-3 pb-5">
          Specialized in JavaScript technologies with an average project score of
          <NumberTicker className=" font-bold pl-2" value={99} />
        </h3>
        <a className="underline" href="">
          View Certification
        </a>
      </div>
    </div>
  );
};

export default EducationSection;
