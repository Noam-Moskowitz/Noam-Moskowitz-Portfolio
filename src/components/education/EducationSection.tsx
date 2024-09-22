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
    <div className="flex flex-col md:flex-row items-start md:items-center border-l-2 pl-4 mt-4 md:border-0 md:pl-0 border-primary py-5 gap-8">
      <img
        className="w-[100px] rounded-full border-2 border-divider"
        src="./src/images/hacker-u-logo-small.png"
        alt=""
      />
      <div className="md:border-l-2 border-divider md:px-8">
        <h1 className="font-bold">{title}</h1>
        <h2 className="">{period}</h2>
        <h3 className="pt-3 pb-5">
          {description}
          <NumberTicker
            className=" font-bold ml-1 border-b-2 text-center border-divider px-1"
            value={grade}
          />
        </h3>
        <CertificationModal />
      </div>
    </div>
  );
};

export default EducationSection;
