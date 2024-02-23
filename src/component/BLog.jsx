import React from "react";
import { Link } from "react-router-dom";

const BLog = () => {
  return (
    <div className="blog">
      <Link to="/blogpath" style={{ textDecoration: "none", color: " #f8c8dc" }}>BLog</Link>
    </div>
  );
};

export default BLog;
