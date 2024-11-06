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
// import pricing from "../assets/pricing_1"

import { Link } from "react-router-dom";
const Signing = () => {
  return (
    <div className="Signing">
      <div style={{ marginTop: "50px" }}>
        <h5 className="hr"></h5>
      </div>
      <div className="Sign">
        <div className="ml-5">
          <h2 style={{ fontSize: "20px", lineHeight: "1" }}>
            <strong>Sign up now</strong> for our newsletter <br /> and be the
            first to receive the <br /> latest news from MedsHousing
          </h2>
          <form action="#" style={{ marginTop: "15PX" }}>
            <input
              type="email"
              required
              placeholder="E-mail"
              style={{
                border: "1px solid",
                borderColor: "#0c527b",
                width: "70%",
                padding: "7px",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderRadius: "5px",
              }}
            />
            <input type="submit" hidden />
            <button
              type="submit"
              style={{
                backgroundColor: "#0c527b",
                padding: "13px",
                width: "17%",
                marginTop: "9px",
                borderRadius: "5px",
                paddingTop: "10px",
                fontWeight: "500",
              }}
            >
              {" "}
              <Link to="#">
                <BsArrowRight
                  style={{
                    color: "wheat",
                    marginLeft: "7px",
                  }}
                />
              </Link>
            </button>
          </form>
        </div>
        <div className="doc">
          <FaUserDoctor style={{ fontSize: "80px" }} />
        </div>
        <div>
          <h2 style={{ fontSize: "20px", lineHeight: "1" }}>
            Have a great property{" "}
            <strong>
              near <br /> medical schools or hospitals?
            </strong>{" "}
            <br /> Add your Property Listing!
          </h2>
          <Link
            to="/signup"
            type="submit"
            style={{
              backgroundColor: "#0c527b",
              color: "white",
              borderRadius: "5px",
              paddingLeft: "35px",
              paddingRight: "35px",
              paddingTop: "4px",
              paddingBottom: "6px",
              position: "relative",
              top: "5vh",
              textDecoration: "none",
            }}
            className="btn bg-#0C527B"
          >
            Sign Up
          </Link>
        </div>
        <MdEventBusy style={{ fontSize: "80px" }} />
        <div>
          <h2 style={{ fontSize: "20px", lineHeight: "1" }}>
            When life is too busy, <br />
            <strong>post a want ad</strong> and <br /> let landlords find you!
          </h2>
          <Link
            to="#"
            className="btn"
            type="submit"
            style={{
              backgroundColor: "#0c527b",
              color: "white",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "5px",
              paddingTop: "9px",
              paddingBottom: "9px",
              position: "relative",
              top: "5vh",
              textDecoration: "none",
            }}
          >
            Post a want ad now!
          </Link>
        </div>
        <div>
          <div className="" style={{ marginLeft: "20px" }}>
            <strong>MedsHousing.com</strong>
            <br />

            <Link
              to="mailto:info@medshousing.com"
              style={{ textDecoration: "none" }}
            >
              info@medshousing.com
            </Link>
            <br />
            <h5 className="flex gap-3">
              <Link
                to="https://www.facebook.com/MedsHousing/"
                className="fab fa-facebook"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "#F8C8DC",
                }}
              >
                {" "}
                <FaFacebook />
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#F8C8DC" }}
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
                style={{ textDecoration: "none", color: "#F8C8DC" }}
              >
                <FaPinterest />
              </Link>
              <Link
                to="https://www.instagram.com/medshousing/"
                className="fab fa-instagram"
                target="blank"
                style={{ textDecoration: "none", color: "#F8C8DC" }}
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
                target="blank"
                style={{ textDecoration: "none", color: "#F8C8DC" }}
              >
                <FaLinkedin />
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
