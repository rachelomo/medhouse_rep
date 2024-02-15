import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"; // Assuming you're using React Icons
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [firstDropdownVisible, setFirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);
  const [thirdDropdownVisible, setThirdDropdownVisible] = useState(false);
  // const [forthDropdownVisible, setForthDropdownVisible] = useState(false);

  return (
    <div className="nested-dropdown">
      <div
        className="dropdown fixed left-40"
        onMouseEnter={() => setFirstDropdownVisible(true)}
        onMouseLeave={() => setFirstDropdownVisible(false)}
      >
        Medical Schools
        {firstDropdownVisible && (
          <div className="dropdown-menu">
            <h2>Search by medical school</h2>
            <h5>
              <Link to="#">Popular Locations</Link>
            </h5>
            <ul>
              <li>
                <Link to="#">University of Toronto</Link>
                <li>
                  <Link to="#"> University of British Columbia</Link>
                </li>{" "}
                <li>
                  <Link to="#">
                    Western University Schulich School of Medicine
                  </Link>
                </li>{" "}
                <li>
                  <Link to="#">Mc Master University</Link>
                </li>
                <li>
                  <Link to="#">University of Ottawa</Link>
                </li>{" "}
                <li>
                  <Link to="#">University of Calgary</Link>
                </li>{" "}
                <li>
                  <Link to="#">McGill University </Link>
                </li>
                <li>
                  <Link to="#"> University of Alberta</Link>
                </li>{" "}
                <li>
                  <Link to="#">University of Manitoba</Link>
                </li>{" "}
                <li>
                  <Link to="#">
                    {" "}
                    SUNY State University of New York Downstate Medical Center
                    College of Medicine
                  </Link>
                </li>{" "}
                <li>
                  <Link to="#">
                    NOSM University (Northern Ontario School of Medicine){" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    Dalhousie Medical School-Halifax and New Brunswick Campus
                  </Link>
                </li>
              </li>
            </ul>
            <div
              className="dropdown-item"
              onClick={() => setSecondDropdownVisible(!secondDropdownVisible)}
            >
              Canada
              {secondDropdownVisible ? (
                <RiArrowDropDownLine />
              ) : (
                <RiArrowDropUpLine />
              )}
            </div>
            {secondDropdownVisible && (
              <div className="nested-dropdown-menu">
                <div
                  className="dropdown-item"
                  onClick={() => setThirdDropdownVisible(!thirdDropdownVisible)}
                >
                  Alberta
                  {thirdDropdownVisible ? (
                    <RiArrowDropDownLine />
                  ) : (
                    <RiArrowDropUpLine />
                  )}
                </div>
                {thirdDropdownVisible && (
                  <div className="nested-dropdown-menu">
                    <div className="dropDown-items">
                      {" "}
                      <h5
                        style={{
                          height: "3000px",
                          width: "10vw",
                          fontSize: "small",
                          background:
                            "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e875%)",
                          margin: 0,
                        }}
                      >
                        University of Alberta Faculty of Medicine and Dentistry
                        (15) University of Calgary Cumming School of Medicine
                        (22)
                      </h5>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
