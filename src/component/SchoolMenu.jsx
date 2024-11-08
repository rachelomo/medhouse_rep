import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import arrow from "../assets/submenu-arrow.gif";
const SchoolMenu = () => {
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
        className="dropdown"
        style={{color: "##0c527b" }}
        onMouseEnter={() => setFirstDropdownVisible(true)}
        onMouseLeave={() => setFirstDropdownVisible(false)}
      >
        <div className="submenu ">
          <Link
            className="text-2xl"
            to="#"
            style={{ textDecoration: "none", color: " ##0c527b" }}
          >
            Medical Schools
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
              <ul className="flex flex-col gap-2 list-none text-white">
                <li style={{ fontSize: "2em" }}>Search by medical school</li>
                <li>
                  {" "}
                  <Link
                    to="#"
                    style={{ fontSize: "15px", textDecoration: "none" }}
                    className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                  >
                    Popular Locations
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="#"
                    className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                  >
                    University of Toronto
                  </Link>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      University of British Columbia
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      Western University Schulich School of Medicine
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      Mc Master University
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      University of Ottawa
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      University of Calgary
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      McGill University{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      University of Alberta
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      University of Manitoba
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      SUNY State University of New York Downstate <br /> Medical
                      Center College of Medicine
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      NOSM University (Northern Ontario School of Medicine){" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="#"
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
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
                <Link
                  style={{ textDecoration: "none" }}
                  to="#"
                  className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                >
                  {" "}
                  Canada
                </Link>
                {secondDropdownVisible ? (
                  <FaChevronUp
                    style={{ marginTop: "6px" }}
                    className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                  />
                ) : (
                  <FaChevronUp
                    style={{ marginTop: "6px" }}
                    className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                  />
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
                      <FaChevronUp
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
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
                  <p className="text-white hover:text-pastel-pink">
                    United State
                  </p>{" "}
                  {isOpen ? (
                    <FaChevronUp
                      style={{ marginTop: "6px" }}
                      className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    />
                  ) : (
                    <FaChevronDown
                      style={{ marginTop: "6px" }}
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
                <div
                  style={{
                    marginLeft: "30vw",
                    position: "relative",
                    bottom: "25px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to="#"
                    className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                  >
                    <p className="hover:text-pastel-pink">Europe</p>
                  </Link>
                  <div
                    onClick={toggleDropdown1}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p className="hover:text-pastel-pink cursor-pointer">
                      Oceania
                    </p>{" "}
                    {isOpen1 ? (
                      <FaChevronUp
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
                    )}
                  </div>
                  {isOpen1 && (
                    <div className="hover:text-pastel-pink cursor:pointer">
                      Atalanta
                      <div
                        onClick={toggleDropdown2}
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <p className="hover:text-pastel-pink cursor:pointer">
                          {" "}
                          Main Land
                        </p>{" "}
                        {isOpen2 ? (
                          <FaChevronUp
                            style={{ marginTop: "6px" }}
                            className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                          />
                        ) : (
                          <FaChevronDown
                            style={{ marginTop: "6px" }}
                            className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                          />
                        )}
                      </div>
                      {isOpen2 && (
                        <div className="text-pastel-pink cursor-pointer ">
                          New York
                          <div
                            onClick={toggleDropdown3}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <p className="hover:text-pastel-pink cursor-pointer">
                              Botswana
                            </p>{" "}
                            {isOpen3 ? (
                              <FaChevronUp
                                style={{ marginTop: "6px" }}
                                className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                              />
                            ) : (
                              <FaChevronDown
                                style={{ marginTop: "6px" }}
                                className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                              />
                            )}
                          </div>
                          {isOpen3 && (
                            <div className="hover:text-pastel-pink cursor-pointer">
                              Australia
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div
                    onClick={toggleDropdown2}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p className="hover:text-pastel-pink hover:text-pastel-pink">
                      {" "}
                      Toronto{" "}
                    </p>

                    {isOpen2 ? (
                      <FaChevronUp
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px" }}
                        className="text-pastel-pink hover:text-pastel-pink hover:transition-colors hover:duration-150"
                      />
                    )}
                  </div>
                  {isOpen2 && (
                    <div className="text-pastel-pink hover:text-pastel-pink">
                      Caribbean
                    </div>
                  )}
                  <div>
                    <Link
                      style={{ textDecoration: "none" }}
                      to=""
                      className="text-white hover:text-pastel-pink hover:transition-colors hover:duration-150"
                    >
                      Other Countries
                    </Link>
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

export default SchoolMenu;
