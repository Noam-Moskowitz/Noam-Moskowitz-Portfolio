import { DiJavascript1, DiReact, DiMongodb, DiNodejsSmall, DiAws, DiMysql } from "react-icons/di";
import Heading from "./Heading";
import HeroImage from "./HeroImage";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

export const keySkillsArr = [
  {
    icon: <DiJavascript1 size={30} />,
    name: `JavaScript`,
  },
  {
    icon: <BiLogoTypescript size={30} />,
    name: `TypeScript`,
  },
  {
    icon: <DiReact size={30} />,
    name: `React`,
  },
  {
    icon: <TbBrandReactNative size={25} />,
    name: `React Native`,
  },

  {
    icon: <DiMongodb size={30} />,
    name: `MongoDB`,
  },
  {
    icon: <DiNodejsSmall size={30} />,
    name: `NodeJS`,
  },
  {
    icon: <DiAws size={30} />,
    name: `AWS`,
  },
  {
    icon: <DiMysql size={30} />,
    name: `MySQL`,
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
