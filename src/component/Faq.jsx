// import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Faq = () => {
  return (
    <div className="dp">
      <Link to="" className="Faq">
        <Link to="#"> FAQ</Link>
        <div
          className="arrow"
          // style={{ marginTop: "36px", marginLeft: "10px" }}
        >
          {/* <FaChevronUp /> */}
        </div>
      </Link>
      <div className="dpc_black">
        <li className="li">
          <Link to="/SignUP">FAQ for landlord</Link>
        </li>
        <li className="li">
          <Link to="">FAQ for tenant</Link>
        </li>
      </div>
    </div>
  );
};

export default Faq;
