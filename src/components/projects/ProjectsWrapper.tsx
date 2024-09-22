import React from "react";
import ProjectContainer from "./ProjectContainer";

const ProjectsWrapper = () => {
  return (
    <div id="projects" className="bg-secondary  border-t-8 border-divider p-10">
      <h1 className="font-bold text-4xl">Projects</h1>
      <div className="flex flex-col items-center">
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </div>
  );
};

export default ProjectsWrapper;
