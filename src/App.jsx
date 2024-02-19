import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "../src/registration/SignUp";
import Home from "./Home.jsx";
import Signing from "./Signed/Signing.jsx";
import CopyWrite from "./LandPage/CopyWrite.jsx";
import Medhouse from "./LandPage/Medhouse.jsx";
import Nav from "./Nav.jsx";
import "./App.css";
import BlogPath from "./links/BlogPath.jsx";
import Purpular from "./links/Purpular.jsx";
import Pricing from "./links/Pricing.jsx";
import AboutPath from "./links/AboutPath.jsx";
import Adding from "./links/Adding.jsx";
import Cardsec from "./links/Cardsec.jsx";
import Cardthd from "./links/Cardthd.jsx";
import Addingft from "./links/Addingft.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      if (top > 100) {
        // You can adjust this value based on your preference
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      {isNavVisible && <Nav className="nav" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <SignUp
              currentStep={currentStep}
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
            />
          }
        />
        <Route path="/blogpath" element={<BlogPath />} />
        <Route path="/card/2" element={<Cardsec />} />
        <Route path="/card/3" element={<Cardthd />} />
        <Route path="/purpular" element={<Purpular />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/aboutpath" element={<AboutPath />} />
        <Route path="/adding" element={<Adding />} />
        <Route path="/addingft" element={<Addingft />} />
      </Routes>
      <Medhouse />
      <Signing />
      <CopyWrite />
    </BrowserRouter>
  );
}

export default App;
