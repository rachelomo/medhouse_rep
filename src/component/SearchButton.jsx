import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-end mr-24">
      {" "}
      {/* Added flex container with justify-end */}
      <div className="">
        {!isExpanded && (
          <button className="search-icon" onClick={handleButtonClick}>
            <FaSearch style={{ fontSize: "25px" }} />
          </button>
        )}
        {isExpanded && (
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="close-button" onClick={handleButtonClick}>
              <FaSearch style={{ fontSize: "25px" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchButton;
