import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"; // Assuming you're using React Icons

const Dropdown_Thrd = () => {
  const [firstDropdownVisible, setFirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);
  const [thirdDropdownVisible, setThirdDropdownVisible] = useState(false);
  // const [forthDropdownVisible, setForthDropdownVisible] = useState(false);

  return (
    <div className="nested-dropdown">
      <div
        className="dropdown"
        onMouseEnter={() => setFirstDropdownVisible(true)}
        onMouseLeave={() => setFirstDropdownVisible(false)}
      >
        Search Location
        {firstDropdownVisible && (
          <div className="dropdown-menu">
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

export default Dropdown_Thrd;
