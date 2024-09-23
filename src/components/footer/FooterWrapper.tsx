import React from "react";
import DownloadCVButton from "../ui/DownloadCVButton";

const FooterWrapper = () => {
  return (
    <div className="bg-background-1 py-20 md:py-12 px-5 border-t-8 border-divider flex flex-col md:flex-row gap-5 justify-around items-start ">
      <div>
        <div className="pb-5">
          <p className="font-bold">Connect with me:</p>
          <a
            className="underline mr-2 hover:text-primary"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          |
          <a
            className="underline mx-2 hover:text-primary"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          |
          <a
            className="underline mx-2 hover:text-primary"
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div>
          <h6 className="font-bold">Roadmap:</h6>
          <p className="underline flex flex-wrap gap-2">
            <a className="hover:text-primary" href="#about">
              About
            </a>
            |
            <a className="hover:text-primary" href="#experience">
              Experience
            </a>
            |
            <a className="hover:text-primary" href="#projects">
              Projects
            </a>
            |
            <a className="hover:text-primary" href="#education">
              Education
            </a>
            |
            <a className="hover:text-primary" href="#contact">
              Contact
            </a>
          </p>
        </div>
      </div>
      <div>
        <p className="pb-5 font-bold">
          Interested in working together?
          <a
            className="font-normal text-primary underline hover:text-white"
            href="https://wa.me/972546107337?text=Hi%20Noam,%20I%20am%20interested%20in%20in%20working%20together!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch!
          </a>
        </p>
        <DownloadCVButton />
      </div>
    </div>
  );
};

export default FooterWrapper;
