import "./App.css";
import AboutWrapper from "./components/about/AboutWrapper";
import EducationWrapper from "./components/education/EducationWrapper";
import ExpereienceWarpper from "./components/experience/ExpereienceWarpper";
import HeroWrapper from "./components/hero/HeroWrapper";
import NavBar from "./components/nav/NavBar";
import ProjectsWrapper from "./components/projects/ProjectsWrapper";

function App() {
  return (
    <>
      <NavBar />
      <HeroWrapper />
      <AboutWrapper />
      <ExpereienceWarpper />
      <ProjectsWrapper />
      <EducationWrapper />
    </>
  );
}

export default App;
