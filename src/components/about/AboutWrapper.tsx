import AboutParagrah from "./AboutParagrah";
import { aboutMeArr } from "@/constants/about";

const AboutWrapper = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row p-10 bg-secondary border-y-8 border-divider"
    >
      {aboutMeArr.map((para, i) => (
        <AboutParagrah key={i} content={para.content} title={para.title} />
      ))}
    </div>
  );
};

export default AboutWrapper;
