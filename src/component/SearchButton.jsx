import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="f flex justify-end mr-24">
      {" "}
      {/* Added flex container with justify-end */}
      <div className="">
        {!isExpanded && (
          <button
            className=""
            style={{
              outline: "none",
              border: "none",
              color: "#0c527b",
              cursor: "pointer",
            }}
            onClick={handleButtonClick}
          >
            <FaSearch style={{ fontSize: "1.5vw", outline: "none" }} />
          </button>
        )}
        {isExpanded && (
          <div className="">
            <input
              type="text"
              placeholder="Search..."
              className=""
              style={{
                borderTop: "#0c527b",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#0c527b",
              }}
            />
            <button
              className=""
              onClick={handleButtonClick}
              style={{
                outline: "none",
                border: "none",
                color: "#0c527b",
                cursor: "pointer",
              }}
            >
              <FaSearch style={{ fontSize: "1.4vw", outline: "none" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchButton;
