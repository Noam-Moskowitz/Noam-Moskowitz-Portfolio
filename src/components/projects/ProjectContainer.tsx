import React from "react";
import { HiOutlineFolder } from "react-icons/hi2";
import { RainbowButton } from "../magicui/rainbow-button";

const ProjectContainer = () => {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse md:w-2/3 border-2 items-center justify-center p-5">
      <div className="flex justify-center md:w-[50%]">
        <HiOutlineFolder size={200} />
      </div>
      <div className="flex flex-col items-start justify-start md:w-[50%] gap-5">
        <h2 className="font-bold text-3xl underline">Project #1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni nemo tempora,
          molestias nostrum reprehenderit maxime similique, debitis iusto molestiae, maiores nobis
          reiciendis ea enim voluptatibus quae officia tenetur. Ullam? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nesciunt, neque. Natus quos et iste, veritatis fugit, nobis
          ut nostrum suscipit eligendi odio quaerat itaque incidunt! Eius, et. Reiciendis, atque.
          Maxime!
        </p>
        <RainbowButton>GitHub</RainbowButton>;
      </div>
    </div>
  );
};

export default ProjectContainer;
