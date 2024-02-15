import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "../src/registration/SignUp";
import Home from "./Home.jsx";
import Signing from "./Signed/Signing.jsx";
import CopyWrite from "./LandPage/CopyWrite.jsx";
import Medhouse from "./LandPage/Medhouse.jsx";
import Nav from "./Nav.jsx";
import "./App.css";

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
      if (top > 100) { // You can adjust this value based on your preference
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      </Routes>
      <Medhouse />
      <Signing />
      <CopyWrite />
    </BrowserRouter>
  );
}

export default App;
