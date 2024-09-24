import EducationSection from "./EducationSection";
import { educationArr } from "@/constants/education";

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
    </div>
  );
};

export default EducationWrapper;
