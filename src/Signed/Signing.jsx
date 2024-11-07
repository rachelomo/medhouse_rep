import "./land.css";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEventBusy } from "react-icons/md";
import { Link } from "react-router-dom";

const Signing = () => {
  return (
    <div className="Signing container">
      <h5 className="w-full h-0.5 bg-gray-200 border"></h5>
      <div className="header" style={{ marginTop: "50px" }}>
      
      </div>
      <div className="Sign">
        <div className="newsletter">
          <h2>
            <strong>Sign up now</strong> for our newsletter <br />
            and be the first to receive the <br /> latest news from MedsHousing
          </h2>
          <form className="newsletter-form">
            <input
              type="email"
              required
              placeholder="E-mail"
              className="email-input"
            />
            <button type="submit" className="submit-btn">
              <Link to="#">
                <BsArrowRight size={20} color="white"/>
              </Link>
            </button>
          </form>
        </div>
        <div className="section">
          <FaUserDoctor className="icon" />
          <h2>
            Have a great property <br />
            <strong>near medical schools or hospitals?</strong> <br />
            Add your Property Listing!
          </h2>
          <Link to="/signup" className="action-btn">
            Sign Up
          </Link>
        </div>
        <div className="section">
          <MdEventBusy className="icon" />
          <h2>
            When life is too busy, <br />
            <strong>post a want ad</strong> and <br /> let landlords find you!
          </h2>
          <Link to="#" className="action-btn">
            Post a want ad now!
          </Link>
        </div>
        <div className="contact">
          <strong>MedsHousing.com</strong>
          <br />
          <Link to="mailto:info@medshousing.com">info@medshousing.com</Link>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/MedsHousing/"
              target="_blank"
              className="social-icon"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://twitter.com/MedsHousing"
              target="_blank"
              className="social-icon"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.pinterest.ca/medshousing/_created/"
              target="_blank"
              className="social-icon"
            >
              <FaPinterest />
            </Link>
            <Link
              to="https://www.instagram.com/medshousing/"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
