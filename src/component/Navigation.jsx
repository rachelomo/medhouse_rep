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
            id="link"
            src={logo}
            alt="Logo"
            style={{
              width: "30%",
              height: "5.5vh",
              marginRight: "390px",
              cursor: "pointer",
            }}
          />
        </Link>
        <div className="med">
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/MedsHousing/"
              className="fab fa-facebook"
              target="blank"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://twitter.com/MedsHousing"
              className="fab fa-twitter"
              target="blank"
            >
              <FaTwitter />
            </Link>

            <Link
              to="https://www.pinterest.ca/medshousing/_created/"
              className="fab fa-pinterest-p"
              target="blank"
            >
              <FaPinterest />
            </Link>
            <Link
              to="https://www.instagram.com/medshousing/"
              className="fab fa-instagram"
              target="blank"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
              className="fab fa-linkedin"
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
                  <li>I am a landlord</li>
                </a>

                <li style={{ cursor: "pointer" }}>
                  <Link to="/">I am a tenant</Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
