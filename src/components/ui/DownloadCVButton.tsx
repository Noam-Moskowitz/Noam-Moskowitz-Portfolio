import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const DownloadCVButton = () => {
  return (
    <a href="/downloads/Noam-Moskowitz-CV.pdf" download="Noam Moskowitz CV.pdf">
      <AnimatedSubscribeButton
        buttonColor="primary"
        buttonTextColor="primary-foreground"
        subscribeStatus={false}
        initialText={
          <span className="group inline-flex items-center">
            Download My CV
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        }
        changeText={
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 h-4 w-4" />
            Downloaded{" "}
          </span>
        }
      />
    </a>
  );
};

export default DownloadCVButton;
