// Navigation.js
// Import the Logo component

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="MEDS ml-3">
      <div className="MED">
        {" "}
        <Link to="/">
          <img
            className="img"
            src={logo}
            alt="Logo"
            style={{
              height: "10vh",
              width: "14vw",
              marginRight: "22vw",
              cursor: "pointer",
            }}
          />
        </Link>
        <div className="med">
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/MedsHousing/"
              className="fab"
              target="blank"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://twitter.com/MedsHousing"
              className="fab"
              target="blank"
            >
              <FaTwitter />
            </Link>

            <Link
              to="https://www.pinterest.ca/medshousing/_created/"
              className="fab"
              target="blank"
            >
              <FaPinterest />
            </Link>
            <Link
              to="https://www.instagram.com/medshousing/"
              className="fab"
              target="blank"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
              className="fab"
              target="blank"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div className="button">
            <span className="dropdown-account">
              <Link to="" className="gray index">
                {" "}
                Login
              </Link>
            </span>

            <div className="dp">
              <Link to="" className="btn-register">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
