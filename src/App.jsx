import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import InitialLoad from "./components/InitialLoad";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <InitialLoad /> */}
      <LenisProvider>
        <Hero />
        <About />
        <Work />
        <TechStack />
        <Reviews />
        <Navbar />
        <Footer />
      </LenisProvider>
      {/* <h2 className="text-white">Parallex</h2>
      <h1 className="text-white">My portfolio</h1>
      <br />
      <p className="text-white">Coming soon....</p>
      <p className="text-white">
        Testa nalo unna creativity pottam bitiki testa ....
      </p> */}
    </>
  );
}

export default App;
