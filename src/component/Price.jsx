import React from "react";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <div className="price">
      <Link to="/pricing" style={{ textDecoration: "none", color: " #0c527b" }}>
        Pricing
      </Link>
    </div>
  );
};

export default Price;
