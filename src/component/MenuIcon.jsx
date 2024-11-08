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
import SearchComponent from "./SearchComponent.jsx";


const MenuIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsClicked(!isClicked);
  };

  return (
    <div className="MenuIcon flex flex-col w-full leading-none">
  {/* Logo Section */}
<div className="w-full flex justify-center mb-2 relative right-5 leading-none ">
  <Link to="/" className="w-full leading-none  leading-none ">
    <img
      src={logo}
      alt="logo"
      className="h-[14vh] w-[71vw]"
      style={{boxSizing: "border-box" }}
    />
  </Link>
</div>



      {/* Join Us and Login Section */}
    <div className="flex justify-around  leading-none ">
    <div>
      <div className="dp relative right-[5vw] md:relative md:right-0 mt-3 leading-none ">
    <Link
      to=""
      className="leading-none  bg-[#0c527b] font-montserrat font-normal text-xs md:text-base rounded-md uppercase text-white p-2 pl-7 pr-7"
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
  <span className="dropdown-account relative right-[4.5vw] md:relative md:right-0">

    <Link to="" className="gray index">
      {" "}
      Login
    </Link>
  </span>
  {/* search */}
<div className="">
   <SearchComponent />
</div>
    </div>
{/* </div> */}
        {/* Menu Toggle Button */}
      <div className="relative right-[14.5vw] md:relative md:right-0">
  <FaBars
    onClick={toggleMenu}
    className={`text-3xl p-1 cursor-pointer bg-gray-200 rounded hover:bg-[#0c527b] text-black ${
      isClicked ? "bg-[#0c527b] text-black" : ""
    }`}
  />
</div>
</div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div
        className="leading-none menu-overlay bg-[#262626] text-[white] fixed left-0 right-0 z-10 top-[34.4vh] flex flex-col items-center p-6 space-y-4 overflow-y-auto"
        style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="w-full max-w-md flex flex-col items-start text-lg font-semibold text-white">
            <SchoolMenu />
            <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] h-[0.1px]"></div>

            <HouseMenu />
            <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] h-[0.1px]"></div>

            <TenantMenu />
            
           <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] relative top-[6vh] h-[0.1px]"></div>
            <Price />
           <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] h-[0.1px]"></div>
            <FAQ />
           <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] h-[0.1px]"></div>
            <BLog />
           <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] h-[0.1px]"></div>
            <AboutUs />
           <div className="border-t w-[83vw] bg-gray-600 my-[1.7vh] h-[0.1px]"></div>
            <Adds />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuIcon;
