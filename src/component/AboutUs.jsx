// import { BsLifePreserver } from "react-icons/bs";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about">
      <Link
        to="/aboutpath"
        style={{ textDecoration: "none", color: " #f8c8dc" }}
      >
        About Us
      </Link>
    </div>
  );
};

export default AboutUs;
