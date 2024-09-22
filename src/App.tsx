import "./App.css";
import AboutWrapper from "./components/about/AboutWrapper";
import ContactWrapper from "./components/contact/ContactWrapper";
import EducationWrapper from "./components/education/EducationWrapper";
import ExpereienceWarpper from "./components/experience/ExpereienceWarpper";
import HeroWrapper from "./components/hero/HeroWrapper";
import NavBar from "./components/nav/NavBar";
import ProjectsWrapper from "./components/projects/ProjectsWrapper";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NavBar />
        <HeroWrapper />
        <AboutWrapper />
        <ExpereienceWarpper />
        <ProjectsWrapper />
        <EducationWrapper />
        <ContactWrapper />
      </ThemeProvider>
    </>
  );
}

export default App;
