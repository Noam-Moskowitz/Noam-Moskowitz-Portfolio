import React from "react";
import Meteors from "../magicui/meteors";
import ExperienceSection from "./ExperienceSection";

const ExpereienceWarpper = () => {
  return (
    <div
      id="experience"
      className="relative flex flex-col gap-5 p-10 py-20 w-full overflow-hidden rounded-lg border bg-lime-100 md:shadow-xl"
    >
      <Meteors number={50} />
      <h2 className="text-4xl font-bold">Experience</h2>
      <ExperienceSection />
    </div>
  );
};

export default ExpereienceWarpper;
