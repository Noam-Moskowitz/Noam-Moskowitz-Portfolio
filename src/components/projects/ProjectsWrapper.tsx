import ProjectContainer from "./ProjectContainer";
import { HiSignal } from "react-icons/hi2";
import Carousel from "../ui/Carousel";
import { bCardImages, premiumCarsImages } from "@/constants/projects";

const ProjectsWrapper = () => {
  const projectArr = [
    {
      title: `Final Project: Premium Cars Platform`,
      subtitle: `HackerU (Grade: 100)`,
      display: (
        <Carousel
          images={premiumCarsImages.map((item, i) => (
            <img
              key={i}
              className={`fade rounded shadow-md transition-opacity `}
              src={item}
              alt="presentation images"
            />
          ))}
        />
      ),
      content: `Developed a full-stack car rental platform enabling admins to manage cars and branchesand customers to book rentals online with flexible pickup/drop-off options.
      Developed a full-stack car rental platform enabling admins to manage cars and branches
and customers to book rentals online with flexible pickup/drop-off options.
Hook Form, Vite, Zod.
Built from scratch, showcasing proficiency in modern JavaScript/TypeScript frameworks
and tools.

Backend: Node.js, Express.js, Mongoose, bcrypt, JWT, Joi, CORS.
Frontend: React (TypeScript), Tailwind CSS, Shadcn UI, Redux, React Query, Axios, React
.
                `,
      link: `https://github.com/Noam-Moskowitz/Premium-Cars`,
    },
    {
      title: `Final Front-End Project: B Card Platform`,
      subtitle: `HackerU (Grade: 100)`,
      display: (
        <Carousel
          images={bCardImages.map((item, i) => (
            <img
              key={i}
              className={`fade rounded shadow-md transition-opacity `}
              src={item}
              alt="presentation images"
            />
          ))}
        />
      ),
      content: `Developed the front end of a business card platform, enabling users with the correct
credentials to publish virtual business cards for public viewing. Improved skills in
JavaScript, React, front-end validation, and creating reusable React components.
.
                `,
      link: `https://github.com/Noam-Moskowitz/React-Project`,
    },
    {
      title: `Final Back-End Project: B Card Platform`,
      subtitle: `HackerU (Grade: 100)`,
      display: <HiSignal size={300} />,
      content: `Built the back end for a business card platform, handling user authentication, back-end
              validation, token use, and authorization-level programming using MongoDB. Gained
                expertise in back-end security and database management.
                `,
      link: `https://github.com/Noam-Moskowitz/Backend-Project`,
    },
  ];
  return (
    <div id="projects" className="bg-secondary  border-t-8 border-divider p-10">
      <h1 className="font-bold text-4xl">Projects</h1>
      <div className="flex flex-col items-center pt-10">
        {projectArr.map((item, i) => (
          <ProjectContainer
            key={i}
            content={item.content}
            display={item.display}
            link={item.link}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWrapper;
