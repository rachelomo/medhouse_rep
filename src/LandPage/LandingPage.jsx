// import "./land.css";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

// "Hamilton, ON, CA",
// "Calgary, AB, CA",
// "Toronto, ON, CA",
// "Saint-John's, NL, CA",
// "Chapel hill, NC, US",
// "North york, ON, CA",
// "Edmonton, AB, CA",
// "London, ON, CA",
// "Wanguri, AU",
// "Ottawa, ON, CA",
const LandingPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Seattle",
    "Boston",
    "Houston",
    "Atlanta",
    "Miami",
    "Denver",
  ];

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowSearch(false);
    setSearchQuery("");
  };

  // const [isExpanded, setIsExpanded] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleToggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };

  // const handleSearch = () => {
  //   const results = CitySearch.filter((city) =>
  //     city.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(results);
  // };

  // const [date, setDate] = useState(new Date());
  return (
    <div className="land">
      <h1>
        GLOBAL HOUSING <br />
        FOR THE MEDICAL COMMUNITY
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          marginRight: "80px",
        }}
      >
        {!showSearch && (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowSearch(true)}
          >
            <input
              type="text"
              placeholder="Where?"
              readOnly
              className="w-50 outline-none"
            />
            <FaArrowDown className="relative right-10" />
          </div>
        )}
        {showSearch && (
          <div className="rounded">
            <div className="flex items-center border-b-none outline-b-none">
              <input
                type="text"
                placeholder="Search for a city..."
                className=" outline-none"
                onChange={handleInputChange}
                value={searchQuery}
              />
              <FaSearch className="relative right-10 bg-white cursor-pointer" />
            </div>
            <div
              className="
            "
            >
              {cities
                .filter((city) =>
                  city.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((city, index) => (
                  <div
                    key={index}
                    className=" cursor-pointer bg-white mr-4 overflow-y-auto max-h-40 hover:bg-gray-100"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </div>
                ))}
            </div>
          </div>
        )}
        {selectedCity && (
          <div className="mt-2">Selected City: {selectedCity}</div>
        )}

        <input
          type="date"
          name=""
          id=""
          placeholder="When?"
          style={{ cursor: "pointer", height: "40px" }}
        />
        <button type="submit" className="default-link ml-3 mt-0.5">
          <Link to="/">
            {" "}
            <IoArrowForward className="ml-2.5" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
