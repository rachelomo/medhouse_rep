import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import submenuArrow from "../assets/submenu-arrow.png";
const Dropdown = () => {
  const [firstDropdownVisible, setFirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);
  const [thirdDropdownVisible, setThirdDropdownVisible] = useState(false);
  // const [forthDropdownVisible, setForthDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen2(!isOpen3);
  };

  const dropdownItems = [
    {
      id: 1,
      title: "Alabarna",
      content: "Content 1",
    },
    {
      id: 2,
      title: "alaska",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Arizonia",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 5,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 6,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 7,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 8,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 10,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 11,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 12,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 13,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 14,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: "15",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "16",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "17",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "18",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "19",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "20",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "21",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "22",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "23",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "23",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "24",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "25",
      Names: "north Dakota",
      Con: "Content 3",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onItemClick = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  return (
    <div className="nested-dropdown">
      <div
        className="dropdown fixed left-40"
        onMouseEnter={() => setFirstDropdownVisible(true)}
        onMouseLeave={() => setFirstDropdownVisible(false)}
      >
        <div className="submenu">
          <a href="#">
            Medical Schools
            <div className="submenu-arrow">
              <FaChevronUp className="text-5xl" />
            </div>
          </a>

          {firstDropdownVisible && (
            <div
              className="dropdown-menu"
              style={{
                display: "flex",
                gap: "3em",
                right: "12vw",
                paddingLeft: "130px",
                marginTop: " 7.3vh",
              }}
            >
              <ul>
                <li style={{ fontSize: "2em" }}>Search by medical school</li>
                <li>
                  {" "}
                  <Link to="#">Popular Locations</Link>
                </li>
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
                      SUNY State University of New York Downstate <br /> Medical
                      Center College of Medicine
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
                style={{ display: "flex", flexDirection: "row" }}
                className="dropdown-item relative top-10"
                onClick={() => setSecondDropdownVisible(!secondDropdownVisible)}
              >
                <Link to="#"> Canada</Link>
                {secondDropdownVisible ? (
                  <FaChevronUp style={{ marginTop: "6px" }} />
                ) : (
                  <FaChevronUp style={{ marginTop: "6px" }} />
                )}
              </div>
              {secondDropdownVisible && (
                <div
                  className="nested-dropdown-menu"
                  style={{ position: "absolute", left: "39vw", top: "60px" }}
                >
                  <div
                    className="dropdown-item"
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() =>
                      setThirdDropdownVisible(!thirdDropdownVisible)
                    }
                  >
                    Alberta
                    {thirdDropdownVisible ? (
                      <FaChevronUp style={{ marginTop: "6px" }} />
                    ) : (
                      <FaChevronDown style={{ marginTop: "6px" }} />
                    )}
                  </div>
                  {thirdDropdownVisible && (
                    <div className="nested-dropdown-menu">
                      <div className="dropDown-items relative right-20">
                        {" "}
                        <h5 style={{}}>
                          University of Alberta Faculty of Medicine and
                          Dentistry (15) University of Calgary Cumming School of
                          Medicine (22)
                        </h5>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="text-dropdown  relative top-10">
                {" "}
                <div
                  className="text ml-20"
                  onClick={toggleDropdown}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  {" "}
                  United State{" "}
                  {isOpen ? (
                    <FaChevronUp style={{ marginTop: "6px" }} />
                  ) : (
                    <FaChevronDown style={{ marginTop: "6px" }} />
                  )}
                </div>
                {isOpen && (
                  <div className="dropdown_cont">
                    {dropdownItems.map((item) => (
                      <div key={item.id} onClick={() => onItemClick(item.id)}>
                        <div
                          style={{
                            position: "relative",
                            bottom: "39vh",
                            marginLeft: "60px",
                            paddingLeft: "60px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                            }}
                          >
                            {item.Name}
                          </span>
                          {activeItem === item.id && <div>{item.item}</div>}
                        </div>
                        <div
                          style={{
                            position: "relative",
                            bottom: "70vh",
                            marginLeft: "140px",
                            paddingLeft: "90px",
                          }}
                        >
                          {" "}
                          <span>{item.Names}</span>
                          {activeItem === item.id && <div>{item.Con}</div>}
                        </div>
                        <div>{item.title}</div>
                        {activeItem === item.id && <div>{item.content}</div>}
                      </div>
                    ))}
                  </div>
                )}
                <div
                  style={{
                    marginLeft: "30vw",
                    position: "relative",
                    bottom: "25px",
                  }}
                >
                  <Link to="#">Europe</Link>
                  <div
                    onClick={toggleDropdown1}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    Oceania{" "}
                    {isOpen1 ? (
                      <FaChevronUp style={{ marginTop: "6px" }} />
                    ) : (
                      <FaChevronDown style={{ marginTop: "6px" }} />
                    )}
                  </div>
                  {isOpen1 && (
                    <div>
                      Dropdown 1 Content
                      <div
                        onClick={toggleDropdown2}
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        Nested Dropdown 1{" "}
                        {isOpen2 ? (
                          <FaChevronUp style={{ marginTop: "6px" }} />
                        ) : (
                          <FaChevronDown style={{ marginTop: "6px" }} />
                        )}
                      </div>
                      {isOpen2 && (
                        <div>
                          Nested Dropdown 1 Content
                          <div
                            onClick={toggleDropdown3}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            Nested Nested Dropdown 1{" "}
                            {isOpen3 ? (
                              <FaChevronUp style={{ marginTop: "6px" }} />
                            ) : (
                              <FaChevronDown style={{ marginTop: "6px" }} />
                            )}
                          </div>
                          {isOpen3 && (
                            <div>Nested Nested Dropdown 1 Content</div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div
                    onClick={toggleDropdown2}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    Dropdown 2{" "}
                    {isOpen2 ? (
                      <FaChevronUp style={{ marginTop: "6px" }} />
                    ) : (
                      <FaChevronDown style={{ marginTop: "6px" }} />
                    )}
                  </div>
                  {isOpen2 && <div>Caribbean</div>}
                  <div>
                    <Link to="">Other Countries</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
