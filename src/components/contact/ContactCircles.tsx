import React from "react";
import OrbitingCircles from "../magicui/orbiting-circles";

const ContactCircles = () => {
  return (
    <div>
      <div className="relative flex h-[500px] w-[50vw] flex-col items-center justify-center overflow-hidden rounded-lg ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black z-40">
          Contact Me
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <img src="./src/images/gmail.svg" alt="" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <img src="./src/images/whatsapp.svg" alt="" />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <img src="./src/images/linkedin.svg" alt="" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <img src="./src/images/github.svg" alt="" />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default ContactCircles;
