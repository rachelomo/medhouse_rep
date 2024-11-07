import { Link } from "react-router-dom";

const Adds = () => {
  return (
    <div className="adds">
      <Link to="/adding" style={{ textDecoration: "none", color: "#0c527b" }}>
        Tenant want Ads
      </Link>
    </div>
  );
};

export default Adds;
