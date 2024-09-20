import "./App.css";
import AboutWrapper from "./components/about/AboutWrapper";
import EducationWrapper from "./components/education/EducationWrapper";
import ExpereienceWarpper from "./components/experience/ExpereienceWarpper";
import HeroWrapper from "./components/hero/HeroWrapper";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroWrapper />
      <AboutWrapper />
      <ExpereienceWarpper />
      <EducationWrapper />
    </>
  );
}

export default App;
