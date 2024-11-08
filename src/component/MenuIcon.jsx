import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import FAQ from "./FaqMenu";
import Price from "./Price";
import BLog from "./BLog";
import AboutUs from "./AboutUs.jsx";
import Adds from "./Adds.jsx";
import SchoolMenu from "./SchoolMenu.jsx";
import HouseMenu from "./HouseMenu.jsx";
import TenantMenu from "./TenantMenu.jsx";

const MenuIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsClicked(!isClicked);
  };

  return (
    <div className="MenuIcon flex flex-col w-full">
  {/* Logo Section */}
<div className=" flex justify-center mb-2 px-4">
  <Link to="/" className="w-full">
    <img
      src={logo}
      alt="logo"
      className="w-full h-16 object-contain" // Full-width with adjusted height
      style={{ maxWidth: "100%" }}
    />
  </Link>
</div>


      {/* Join Us and Login Section */}
      {/* flex w-full justify-around items-center */}
    <div className="flex justify-around">
    <div>
      <div className="dp relative right-[15vw] md:relative md:right-0">
    <Link
      to=""
      className=" bg-customBlue font-montserrat font-normal text-xs md:text-base rounded-md uppercase text-white p-2 pl-7 pr-7"
    >
      Join us
    </Link>
    <div className="dpc">
      <a href="SignUp">
        <li className="li">I am a landlord</li>
      </a>

      <Link to="/" style={{ cursor: "pointer" }}>
        <li className="li"> I am a tenant</li>
      </Link>
    </div>
  </div>
  <span className="dropdown-account relative right-[14vw] md:relative md:right-0">
    <Link to="" className="gray index">
      {" "}
      Login
    </Link>
  </span>
    </div>
{/* </div> */}
        {/* Menu Toggle Button */}
        <div className="relative right-[3vw] md:relative md:right-0">
          <FaBars
            onClick={toggleMenu}
            className={`text-3xl p-2  cursor-pointer ${
              isClicked ? "bg-customBlue text-black" : "text-black"
            }`}
          />
        </div>
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay bg-gray-800 text-white fixed inset-0 z-10 flex flex-col items-center p-6 space-y-4 overflow-y-auto"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="w-full max-w-md flex flex-col items-start space-y-3 text-lg font-semibold">
            <SchoolMenu />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <HouseMenu />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <TenantMenu />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <Price />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <FAQ />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <BLog />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <AboutUs />
            <div className="border-t border-gray-600 w-full my-2"></div>
            <Adds />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuIcon;
