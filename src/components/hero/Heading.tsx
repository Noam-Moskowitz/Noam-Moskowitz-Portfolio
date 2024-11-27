import { FadeText } from "../magicui/fade-text";
import WordRotate from "../magicui/word-rotate";
import ShinyButton from "../magicui/shiny-button";
import DownloadCVButton from "../ui/DownloadCVButton";
import { keySkillsArr } from "./HeroWrapper";

const Heading = () => {
  return (
    <div className=" md:w-[50%] py-5 md:h-[80vh] flex items-center justify-center">
      <div className="w-full flex flex-col justify-center px-10">
        <div className="flex gap-2">
          <FadeText
            className="text-2xl md:text-4xl font-bold  text-divider "
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text="Hi!"
          />
          <FadeText
            className="text-2xl md:text-4xl font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.4 } },
            }}
            text="I'm Noam Moskowitz"
          />
        </div>
        <div className="flex items-center gap-2">
          <FadeText
            className="text-2xl md:text-4xl font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="I'm A"
          />
          <FadeText
            className=" font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.8 } },
            }}
            text={
              <WordRotate
                className="text-2xl md:text-4xl font-bold bg-divider text-primary-foreground  rounded p-2 "
                words={["Full-Stack Developer", "Front-End Developer", "Back-End Developer"]}
              />
            }
          />
        </div>
        <FadeText
          className=" font-bold text-black dark:text-white"
          direction="up"
          framerProps={{
            show: { transition: { delay: 1 } },
          }}
          text={
            <div className="pt-5 flex flex-col md:flex-row gap-5">
              <a className="" href="#about">
                <ShinyButton
                  className="py-3 bg-divider text-primary-foreground "
                  text="Find Out More!"
                />
              </a>
              <DownloadCVButton />
            </div>
          }
        />
        <FadeText
          className=" font-bold  text-black dark:text-white"
          direction="up"
          framerProps={{
            show: { transition: { delay: 1.2 } },
          }}
          text={
            <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-5  justify-start text-sm">
              {keySkillsArr.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center bg-secondary gap-1  px-2 py-1 rounded shadow"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Heading;
