import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Dropdown from "./Dropdown";
import Dropdown_sec from "./Dropdown_sec";
import Dropdown_Thrd from "./Dropdown_Thrd";
import Price from "./Price";
import BLog from "./BLog";
import AboutUs from "./AboutUs";
import Adds from "./Adds";
import SearchButton from "./SearchButton";
import Faq from "./Faq.jsx";

const Navigation = () => {
  return (
    <nav className="MEDS">
      <div className="MED">
        <Link to="/">
          <img
            className="img"
            src={logo}
            alt="Logo"
            style={{
              height: "10vh",
              width: "14vw",
              marginRight: "30vw",
              cursor: "pointer",
            }}
          />
        </Link>
        <div className="">
          <div className="social-icons pt-5">
            <div className="mr-20 flex gap-4">
              <Link
                style={{ color: " #0c527b" }}
                to="https://www.facebook.com/MedsHousing/"
                className=" mt-4 "
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                style={{ color: " #0c527b" }}
                to="https://twitter.com/MedsHousing"
                className=" mt-4 "
                target="_blank"
              >
                <FaTwitter />
              </Link>
              <Link
                style={{ color: " #0c527b" }}
                to="https://www.pinterest.ca/medshousing/_created/"
                className=" mt-4 "
                target="_blank"
              >
                <FaPinterest />
              </Link>
              <Link
                style={{ color: " #0c527b" }}
                to="https://www.instagram.com/medshousing/"
                className=" mt-4 "
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                style={{ color: " #0c527b" }}
                to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
                className=" mt-4 "
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </div>
            <div className="button  mt-3">
              <span className="dropdown-account ">
                <Link
                  to="/login"
                  className=""
                  style={{ color: "#0c527b", textDecoration: "none" }}
                >
                  Login
                </Link>
              </span>
              <div className="dp pl-5">
                <Link
                  to=""
                  className="btn-register"
                  style={{ textDecoration: "none",color: "white" }}
                >
                  Join us
                </Link>
                <div className="dpc">
                  <a href="/signup" style={{ textDecoration: "none" }}>
                    <li className="li">I am a landlord</li>
                  </a>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <li className="li">I am a tenant</li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 ml-5 absolute">
        <Dropdown />
        <Dropdown_sec />
        <Dropdown_Thrd />
        <Price />
        <Faq />
        <BLog />
        <AboutUs />
        <Adds />
      </div>
      <SearchButton />
    </nav>
  );
};

export default Navigation;
