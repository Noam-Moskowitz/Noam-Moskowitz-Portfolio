import { FaAws } from "react-icons/fa";
import { SiMongodb, SiNuxtdotjs } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { MdPayments, MdSecurity } from "react-icons/md";

import Heading from "./Heading";
import HeroImage from "./HeroImage";
import { BiLogoTypescript } from "react-icons/bi";

export const keySkillsArr = [
  {
    icon: <BiLogoTypescript size={30} />,
    name: "TypeScript",
  },
  {
    icon: <DiNodejsSmall size={30} />,
    name: "Node.js",
  },
  {
    icon: <MdPayments size={28} />,
    name: "Payments &\u00A0FX",
  },
  {
    icon: <MdSecurity size={28} />,
    name: "Application Security",
  },
  {
    icon: <SiMongodb size={28} />,
    name: "MongoDB",
  },
  {
    icon: <FaAws size={28} />,
    name: "AWS",
  },
  {
    icon: <SiNuxtdotjs size={28} />,
    name: "Nuxt",
  },
  {
    icon: <TbBrandReactNative size={27} />,
    name: "React Native",
  },
];

const HeroWrapper = () => {
  return (
    <div className="size-full flex flex-col-reverse md:flex-row items-center overflow-hidden justify-between bg-background-1">
      <Heading />
      <HeroImage />
    </div>
  );
};

export default HeroWrapper;
