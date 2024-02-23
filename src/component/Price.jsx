import React from "react";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <div className="price">
      <Link to="/pricing" style={{ textDecoration: "none", color: " #f8c8dc" }}>
        Pricing
      </Link>
    </div>
  );
};

export default Price;
