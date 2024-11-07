import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "../src/registration/SignUp";
import Home from "./Home.jsx";
import Signing from "./Signed/Signing.jsx";
import CopyWrite from "./LandPage/CopyWrite.jsx";
import Medhouse from "./LandPage/Medhouse.jsx";
import Nav from "./Nav.jsx";
import Login from "./login/Login.jsx";
import "./App.css";
import BlogPath from "./links/BlogPath.jsx";
import Purpular from "./links/Purpular.jsx";
import Pricing from "./links/Pricing.jsx";
import AboutPath from "./links/AboutPath.jsx";
import Adding from "./links/Adding.jsx";
import Cardsec from "./links/Cardsec.jsx";
import Cardthd from "./links/Cardthd.jsx";
import Addingft from "./links/Addingft.jsx";
import Messageme from "./Message/Messageme.jsx";
import Mapapi from "./LandPage/Mapapi.jsx";
import Listing from "./links/Listing.jsx";
import FaqPath from "./links/FaqPath.jsx";
import FaqPathsec from "./links/FaqPathsec.jsx";
import FaqTenant from "./links/FaqTenant.jsx";

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

        <Route path="/login" element={<Login />} />

        <Route path="/map" element={<Mapapi />} />

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
        <Route
          path="/login"
          element={
            <Login
             
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
        <Route path="/Listing" element={<Listing />} />
        <Route path="/faqpath" element={<FaqPath />} />
        <Route path="/FaqPathsec" element={<FaqPathsec />} />
        <Route path="/faqtenant" element={<FaqTenant />} />
      </Routes>

      <Medhouse />
      <Signing />
      <CopyWrite />
      <Messageme />
    </BrowserRouter>
  );
}

export default App;



// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import SignUp from "../src/registration/SignUp";
// import Home from "./Home.jsx";
// import Signing from "./Signed/Signing.jsx";
// import CopyWrite from "./LandPage/CopyWrite.jsx";
// import Medhouse from "./LandPage/Medhouse.jsx";
// import Nav from "./Nav.jsx";
// import Login from "./login/Login.jsx";
// import "./App.css";
// import BlogPath from "./links/BlogPath.jsx";
// import Purpular from "./links/Purpular.jsx";
// import Pricing from "./links/Pricing.jsx";
// import AboutPath from "./links/AboutPath.jsx";
// import Adding from "./links/Adding.jsx";
// import Cardsec from "./links/Cardsec.jsx";
// import Cardthd from "./links/Cardthd.jsx";
// import Addingft from "./links/Addingft.jsx";
// import Messageme from "./Message/Messageme.jsx";
// import Mapapi from "./LandPage/Mapapi.jsx";
// import Listing from "./links/Listing.jsx";
// import FaqPath from "./links/FaqPath.jsx";
// import FaqPathsec from "./links/FaqPathsec.jsx";
// import FaqTenant from "./links/FaqTenant.jsx";

// const App = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const handleNextStep = () => setCurrentStep(currentStep + 1);
//   const handlePrevStep = () => setCurrentStep(currentStep - 1);

//   useEffect(() => {
//     const handleScroll = () => setIsNavVisible(window.scrollY <= 100);
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const checkDevice = () => setIsMobile(window.innerWidth <= 768);
//     checkDevice();
//     window.addEventListener("resize", checkDevice);

//     return () => window.removeEventListener("resize", checkDevice);
//   }, []);

//   if (isMobile) {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '20%' }}>
//         <h1>This website is only available on desktop devices.</h1>
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       {isNavVisible && <Nav className="nav" />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/map" element={<Mapapi />} />
//         <Route
//           path="/signup"
//           element={
//             <SignUp
//               currentStep={currentStep}
//               onNextStep={handleNextStep}
//               onPrevStep={handlePrevStep}
//             />
//           }
//         />
//         <Route path="/blogpath" element={<BlogPath />} />
//         <Route path="/card/2" element={<Cardsec />} />
//         <Route path="/card/3" element={<Cardthd />} />
//         <Route path="/purpular" element={<Purpular />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/aboutpath" element={<AboutPath />} />
//         <Route path="/adding" element={<Adding />} />
//         <Route path="/addingft" element={<Addingft />} />
//         <Route path="/listing" element={<Listing />} />
//         <Route path="/faqpath" element={<FaqPath />} />
//         <Route path="/faqpathsec" element={<FaqPathsec />} />
//         <Route path="/faqtenant" element={<FaqTenant />} />
//       </Routes>

//       {/* Optional: these components are global, so they appear on all routes */}
//       <Medhouse />
//       <Signing />
//       <CopyWrite />
//       <Messageme />
//     </BrowserRouter>
//   );
// };

// export default App;
