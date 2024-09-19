import React from "react";
import { FadeText } from "../magicui/fade-text";
import WordRotate from "../magicui/word-rotate";
import ShinyButton from "../magicui/shiny-button";
import DownloadCVButton from "../ui/DownloadCVButton";

const Heading = () => {
  return (
    <div className=" w-[50%] h-[80vh] flex items-center justify-center">
      <div className="w-full flex flex-col justify-center px-10">
        <FadeText
          className="text-4xl font-bold text-black dark:text-white"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.4 } },
          }}
          text="Noam Moskowitz"
        />
        <div className="flex items-center gap-2">
          <FadeText
            className="text-4xl font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="Im a"
          />
          <FadeText
            className="text-4xl font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.8 } },
            }}
            text={
              <WordRotate
                className="text-4xl font-bold bg-lime-600 text-primary-foreground rounded p-2 dark:text-white "
                words={["Full-Stack Developer", "Front-End Developer", "Back-End Developer"]}
              />
            }
          />
        </div>
        <div className="pt-5 flex gap-5">
          <a href="#about">
            <ShinyButton text="Find Out More!" />
          </a>
          <DownloadCVButton />
        </div>
      </div>
    </div>
  );
};

export default Heading;
