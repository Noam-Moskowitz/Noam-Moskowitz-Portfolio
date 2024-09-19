import "./App.css";
import AboutWrapper from "./components/about/AboutWrapper";
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
    </>
  );
}

export default App;
