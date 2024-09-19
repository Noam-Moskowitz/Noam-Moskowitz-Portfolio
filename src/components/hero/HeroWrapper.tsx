import React from "react";
import Heading from "./Heading";
import HeroImage from "./HeroImage";

const HeroWrapper = () => {
  return (
    <div className="size-full flex flex-col-reverse md:flex-row items-center justify-between bg-lime-200">
      <Heading />
      <HeroImage />
    </div>
  );
};

export default HeroWrapper;
