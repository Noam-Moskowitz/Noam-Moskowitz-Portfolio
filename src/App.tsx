import "./App.css";
import AboutWrapper from "./components/about/AboutWrapper";
import HeroWrapper from "./components/hero/HeroWrapper";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroWrapper />
      <AboutWrapper />
    </>
  );
}

export default App;
