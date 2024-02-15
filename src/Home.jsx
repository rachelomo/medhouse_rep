import LandingPage from "./LandPage/LandingPage";
import HeroSection from "./LandPage/HerroSection";
import HerroSecond from "./LandPage/HerroSecond";
import BlogFooter from "./LandPage/BlogFooter";
import MarketFooter from "./LandPage/MarketFooter";
import { Route, Routes } from "react-router-dom"; // Import Routes from 'react-router-dom'
// import MapView from "./LandPage/MapView";
import MapWithMarker from "./LandPage/Google/MapWithMarker";
const images = [
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/500",
];

const Home = () => {
  const markerPosition = { lat: -34.397, lng: 150.644 };
  return (
    <>
      <LandingPage />
      <Routes>
        {" "}
        <Route path="/" element={<HeroSection />} />
        <Route
          path="/map"
          element={<MapWithMarker center={markerPosition} />}
        />
      </Routes>
      <HerroSecond images={images} />
      <BlogFooter images={images} />
      <MarketFooter />
    </>
  );
};

export default Home;
