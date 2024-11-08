import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="MenuIcon flex flex-col w-full">
      {/* Logo Section */}
      <div className="w-full flex justify-center mb-2 relative right-5">
        <Link to="/" className="w-full">
          <img
            src={logo}
            alt="logo"
            className="h-[15vh] w-[71vw]"
            style={{ boxSizing: "border-box" }}
          />
        </Link>
      </div>

      {/* Join Us and Login Section */}
      <div className="flex justify-around">
        <div>
          <div className="dp relative right-[15vw] md:relative md:right-0 mt-3">
            <Link
              to=""
              className="bg-[#0c527b] font-montserrat font-normal text-xs md:text-base rounded-md uppercase text-white p-2 pl-7 pr-7"
            >
              Join us
            </Link>
            <div className="dpc">
              <a href="SignUp">
                <li className="li">I am a landlord</li>
              </a>
              <Link to="/" style={{ cursor: "pointer" }}>
                <li className="li">I am a tenant</li>
              </Link>
            </div>
          </div>
          <span className="dropdown-account relative right-[14vw] md:relative md:right-0">
            <Link to="" className="gray index">
              Login
            </Link>
          </span>
        </div>

        {/* Menu Toggle Button */}
        <div className="relative right-[4.5vw] md:relative md:right-0">
          {menuOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-3xl p-2 cursor-pointer bg-[#0c527b] text-black"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-3xl p-2 cursor-pointer text-black"
            />
          )}
        </div>
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay bg-[#262626] text-white fixed inset-0 z-10 flex flex-col items-center p-6 space-y-4 overflow-y-auto transition-opacity duration-300 ease-in-out"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="w-full max-w-md flex flex-col items-start text-lg font-semibold">
            <SchoolMenu />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <HouseMenu />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <TenantMenu />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <Price />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <FAQ />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <BLog />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <AboutUs />
            <div className="border-t border-gray-600 w-full my-6"></div>
            <Adds />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuIcon;
