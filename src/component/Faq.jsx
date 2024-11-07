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
        <Link
          to="/faqpath"
          style={{ textDecoration: "none", color: " #0c527b" }}
        >
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
            <img
              src={arrow}
              alt="arrow"
              style={{
                width: "22px",
                height: "10px",
                marginTop: "4.1vh",
              }}
            />
            <div
              style={{ position: "relative", bottom: "6px" }}
              className="bg-black opacity-80 text-white w-100 relative right-20"
            >
              <ul className="p-5 list-none">
                <li>
                  <Link
                    to="/FaqPathsec"
                    className="hover:text"
                    style={{
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <p className="hover:text-pastel-pink">Faq for landlord</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqtenant"
                    className=""
                    style={{
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <p className="hover:text-pastel-pink">Faq for tenants</p>
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
