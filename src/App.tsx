import "./App.css";
import AboutWrapper from "./components/about/AboutWrapper";
import ContactWrapper from "./components/contact/ContactWrapper";
import Copyright from "./components/copyright/Copyright";
import EducationWrapper from "./components/education/EducationWrapper";
import ExpereienceWarpper from "./components/experience/ExpereienceWarpper";
import FooterWrapper from "./components/footer/FooterWrapper";
import HeroWrapper from "./components/hero/HeroWrapper";
import NavBar from "./components/nav/NavBar";
import ProjectsWrapper from "./components/projects/ProjectsWrapper";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="transition-colors duration-200">
          <NavBar />
          <HeroWrapper />
          <AboutWrapper />
          <ExpereienceWarpper />
          <ProjectsWrapper />
          <EducationWrapper />
          <ContactWrapper />
          <FooterWrapper />
          <Copyright />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
