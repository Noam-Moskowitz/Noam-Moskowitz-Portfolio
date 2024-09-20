import React from "react";
import NumberTicker from "../magicui/number-ticker";
import CertificationModal from "./CertificationModal";

interface EducationSectionProps {
  title: string;
  period: string;
  description: string;
  grade: number;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  period,
  description,
  grade,
}) => {
  return (
    <div className="flex items-center py-5 gap-8">
      <img
        className="w-[100px] rounded-full border-2 border-lime-700"
        src="./src/images/hacker-u-logo-small.png"
        alt=""
      />
      <div className="border-l-2 border-primary px-8">
        <h1 className="font-bold">{title}</h1>
        <h2 className="">{period}</h2>
        <h3 className="pt-3 pb-5">
          {description}
          <NumberTicker
            className=" font-bold ml-1 border-b-2 text-center border-lime-700 px-1"
            value={grade}
          />
        </h3>
        <CertificationModal />
      </div>
    </div>
  );
};

export default EducationSection;
