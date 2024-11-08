import { useState } from "react";
import arrow from "../assets/submenu-arrow.gif";
import { Link } from "react-router-dom";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container">
      <div
        className="faq-question"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <Link to="/faqpath" className="text-2xl" style={{ color: "#0c527b" }}>
          Faq
        </Link>

        {isOpen && (
          <div
            style={{
              display: "block",
              position: "absolute",
              minWidth: "200px",
            }}
          >
            <div className="bg-black opacity-80 text-pastel-pink w-100 relative right-20">
              <ul
                className=" p-5 mt-4 "
                style={{
                  width: "120vw",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                <li>
                  <Link
                    to="/FaqPathsec"
                    className="text-white hover:text-pastel-pink ml-[12vw] md:ml-0"
                    style={{ fontSize: "15px" }}
                  >
                    Faq for landlord
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqtenant"
                    className="text-white hover:text-pastel-pink ml-[12vw] md:ml-0"
                    style={{ fontSize: "15px" }}
                  >
                    Faq for tenants
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
