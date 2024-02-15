import { Link } from "react-router-dom";
const Faq = () => {
  return (
    <div className="dp">
      <Link to="" className="Faq">
        FAQ
      </Link>
      <div className="dpc_black">
        <li>
          <Link to="/SignUP">FAQ for landlord</Link>
        </li>
        <li>
          <Link to="">FAQ for tenant</Link>
        </li>
      </div>
    </div>
  );
};

export default Faq;
