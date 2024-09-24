import Meteors from "../magicui/meteors";
import ExperienceSection from "./ExperienceSection";
import { experienceArr } from "@/constants/experience";

const ExpereienceWarpper = () => {
  return (
    <div
      id="experience"
      className="relative flex flex-col gap-5 p-10 py-20 w-full overflow-hidden  bg-background-1 "
    >
      <Meteors number={50} />
      <h2 className="text-4xl font-bold">Experience</h2>
      {experienceArr.map((item, i) => (
        <ExperienceSection key={i} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default ExpereienceWarpper;
