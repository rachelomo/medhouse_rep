import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import arrow from "../assets/submenu-arrow.gif";
const Dropdown_sec = () => {
  const [firstDropdownVisible, setFirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);
  const [thirdDropdownVisible, setThirdDropdownVisible] = useState(false);
  // const [forthDropdownVisible, setForthDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
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
        className="dropdown"
        style={{ position: "absolute", left: "10vw" }}
        onMouseEnter={() => setFirstDropdownVisible(true)}
        onMouseLeave={() => setFirstDropdownVisible(false)}
      >
        <div className="submenu">
          <Link
            to="#"
            style={{
              textDecoration: "none",
              color: " #0c527b",
           
            }}
          >
            Hospital
            <div className="submenu-arrow ml-1">
              <img
                src={arrow}
                alt="arrow"
                style={{
                  width: "22px",
                  height: "10px",
                  marginTop: "4vh",
                }}
              />
            </div>
          </Link>
          {firstDropdownVisible && (
            <div
              className="dropdown-menu"
              style={{
                display: "flex",
                gap: "3em",
                right: "25vw",
                paddingLeft: "130px",
                marginTop: "5.5vh",
              }}
            >
              <ul>
                <li style={{ fontSize: "2em", listStyle: "none" }}>
                  Search by medical school
                </li>
              </ul>

              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="dropdown-item relative top-10"
                onClick={() => setSecondDropdownVisible(!secondDropdownVisible)}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="#"
                  className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                >
                  {" "}
                  <p className="hover:text-pastel-pink"> Canada</p>
                </Link>
                {secondDropdownVisible ? (
                  <FaChevronUp
                    style={{ marginTop: "6px" }}
                    className="text-pastel-pink  hover:text-pastel-pink  hover:transition-colors hover:duration-150"
                  />
                ) : (
                  <FaChevronUp
                    style={{ marginTop: "6px" }}
                    className="text-pastel-pink  hover:text-pastel-pink hover:transition-colors hover:duration-150"
                  />
                )}
              </div>
              {secondDropdownVisible && (
                <div
                  className="nested-dropdown-menu"
                  style={{ position: "absolute", left: "39vw", top: "60px" }}
                >
                  <div
                    className=" dropdown-item hover:text-pastel-pink  hover:transition-colors hover:duration-150"
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() =>
                      setThirdDropdownVisible(!thirdDropdownVisible)
                    }
                  >
                    <p className="text-pastel-pink"> Alberta</p>
                    Alberta
                    {thirdDropdownVisible ? (
                      <FaChevronUp
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink  hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink  hover:text-pastel-pink  hover:transition-colors hover:duration-150"
                      />
                    )}
                  </div>
                  {thirdDropdownVisible && (
                    <div className="nested-dropdown-menu">
                      <div className="dropDown-items relative right-20">
                        {" "}
                        <h5 className="hover:text-pastel-pink ">
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
                  className="text ml-20 hover:text-blue-500 hover:transition-colors hover:duration-150"
                  onClick={toggleDropdown}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  {" "}
                  <p className="hover:text-pastel-pink">United State </p>
                  {isOpen ? (
                    <FaChevronUp
                      style={{ marginTop: "6px"}}
                      className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    />
                  ) : (
                    <FaChevronDown
                      style={{ marginTop: "6px",}}
                      className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    />
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown_sec;
