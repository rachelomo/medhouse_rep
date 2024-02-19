import { Link } from "react-router-dom";
import waitinRoom from "../assets/slider_1.jpg";
import upgrade from "../assets/upgrade.png";
import { FaSearch, FaArrowDown } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import Addingsec from "./Addingsec";
import Addingthd from "./Addingthd";
// import { IoIosArrowDown } from "react-icons/io";

const Adding = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  // SELLECT AND SEARCH
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    "Medical school",
    "University of Alberta Faculty of Medicine and Dentistry (15) University of Calgary Cumming School of Medicine (22)",
    "(SUNY)State University of New York,  Brooklyn New York (United States)",
    "Abia State University Faculty of Medical Services",
    "Downstate Medical College of Medicine",
    "Academy of Military Medical Science Faculty of Medicine Beijing (China)",
    "Accra College of Medicine Accra (Ghana)",
  ];
  const scrollContainerRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="adding">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "8.8vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20 mr-10">TENANT WANT ADS</p>
        </div>
      </div>
      <div className="bg-blur text-white mt-10 h-40">
        <div className="flex justify-between text-white p-2">
          <h3 className="text-2xl ml-40 mt-5">
            Upgrade to a <strong>MedsGold Yearly</strong> listing and reach out
            to the want ads!
          </h3>
          <img src={upgrade} alt="upgrade_img" className="w-[8vw] mt-5" />
        </div>
        <div className="flex justify-center relative bottom-10">
          <Link to="/" className="hover bg-r p-2 pl-2 pr-2">
            Upgrade now!
          </Link>
        </div>
      </div>
      <div>
        <div
          className=""
          style={{
            backgroundColor: "#F2F2F2",
            width: "100%",
            borderBottom: "grey",
          }}
        >
          <div className="flex">
            <div className="ml-10">
              <div
                className="bg-o w-60 text-center text-white mt-10 pt-5"
                style={{ height: "25vh" }}
              >
                <h3 className="text-2xl font-semibold">
                  Looking for something?
                </h3>
                <div className="mt-5 ">
                  <Link
                    to=""
                    className="bg-blur pl-10 pr-10 pt-2 pb-2"
                    style={{ borderRadius: "5px" }}
                  >
                    Post a want ad!
                  </Link>
                </div>
              </div>

              <div className="flex flex-col w-60 gap-3 bg-white">
                <div className="relative inline-block mt-10">
                  <div
                    // style={{ width: "15vw" }}
                    className="flex items-center border border-black cursor-pointer relative mr-10"
                    onClick={toggleOptions}
                  >
                    <span className="">
                      {selectedOption ? selectedOption : "School of Nigeria"}
                    </span>
                    <FaArrowDown className="text-black-500 ml-10" />
                  </div>
                  {showOptions && (
                    <div
                      style={{
                        zIndex: "10",
                      }}
                      className="absolute mt-1 bg-white rounded-md border border-black-300 w-full max-h-40 overflow-y-auto"
                      ref={scrollContainerRef}
                    >
                      <div className="flex items-center border-b border-black-300 p-2 sticky top-0 bg-white z-10">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="border border-black-300 p-2 w-full"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <FaSearch className="ml-2 text-black-500" />
                      </div>
                      <div className="overflow-y-auto max-h-40">
                        {filteredOptions.map((option, index) => (
                          <div
                            key={index}
                            className="py-2 px-4 cursor-pointer hover:text-white hover:bg-blur "
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Addingsec />
                <Addingthd />
                {/* checkbox */}
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      className={isChecked1 ? "text-gray" : ""}
                    />
                    Short term rental
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      className={isChecked2 ? "text-gray" : ""}
                    />
                    Long term rental
                  </label>
                </div>
                {/* date picker */}
                <div
                  className="relative inline-block ml-1"
                  style={{ width: "15vw" }}
                >
                  <FaCalendarAlt
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
                    style={{ zIndex: "10" }}
                  />
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="When?"
                    dateFormat="MMMM d, yyyy"
                    className="border border-gray-300 rounded-md focus:outline-none "
                    popperPlacement="top-end"
                  />
                  {selectedDate && (
                    <div className="absolute mt-1 bg-white rounded-md border border-gray-300 px-4 py-2">
                      {selectedDate.toLocaleDateString()}
                    </div>
                  )}
                </div>
                {/* checkbox */}
                <div>
                  <label>
                    <input type="checkbox" />
                    Furnished
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" />
                    Unfurnisheds
                  </label>
                </div>
                <div className="mt-5">
                  <Link
                    to=""
                    className="bg-customBlue pl-20 pr-20 pt-2 pb-2 text-white"
                    style={{ borderRadius: "5px" }}
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-20 mt-10">
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>

                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
              <div className="">
                <h3 className="text-blue-500 text-3xl font-semibold">
                  Bracebridge, Ontario (Canada){" "}
                </h3>
                <p>Start date : April 1, 2024</p>
                <p className="font-semibold text-black">
                  South Muskoka Memorial Hospital Site - Muskoka Algonquin
                  Healthcare{" "}
                </p>
                <div className="flex justify-between">
                  <span className="text-blue-500">Furnished/Unfurnished </span>
                  <Link
                    to=""
                    className="bg-customBlue pl-10 pr-10 pt-2 pb-2 text-white"
                  >
                    More info
                  </Link>
                </div>
                <p>Ad #791 Posted on 2024-01-11 11:51:05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adding;
