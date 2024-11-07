import React from "react";
import { Link } from "react-router-dom";

const BLog = () => {
  return (
    <div className="blog">
      <Link to="/blogpath" style={{ textDecoration: "none", color: "#0c527b" }}>BLog</Link>
    </div>
  );
};

export default BLog;
