import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Alldrop from "./Alldrop";

const MarketFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Market">
      <h5 className="w-full h-0.5 bg-gray-200 border mt-5"></h5>
      <h2>
        <strong>MedsHousing Global Markets</strong>
      </h2>
      <div className="AllDrop">
        <div className="">
          {/* <h5 className="ml-10"> */}
            <strong className="mx-10"> Canada</strong>
            <Alldrop />
            <Alldrop />
            <Alldrop />
            <Alldrop />
            {/* <Alldrop />
            <Alldrop /> */}
          {/* </h5> */}
        </div>
        <div>
          <div>
            <h5>
              <strong className="">United States</strong>
            </h5>
          </div>
          <div className="dropdown-header md:mr-6 mr-2 " onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
             <Link to="#">Alberta</Link>
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="#">Calgary (19)</Link>
              <br />
              <Link to="#">Edmonton (19)</Link>
              <br />
              <Link to="#">Grande Prairie (19)</Link>
            </div>
          )}
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
              California
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="#">Calgary (19)</Link>
              <br />
              <Link to="#">Edmonton (19)</Link>
              <br />
              <Link to="#">Grande Prairie (19)</Link>
            </div>
          )}
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
              Colorado(2)
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="#">Calgary (19)</Link>
              <br />
              <Link to="#">Edmonton (19)</Link>
              <br />
              <Link to="#">Grande Prairie (19)</Link>
            </div>
          )}
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
              District of Gambia(2)
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="#">Calgary (19)</Link>
              <br />
              <Link to="#">Edmonton (19)</Link>
              <br />
              <Link to="#">Grande Prairie (19)</Link>
            </div>
          )}
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
              British Colombia (140)
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/en/medical-housing/?city_id=cbcb7c4e33dc4f5f1aec3eb8d7a51dbe&amp;city=Campbell+River&amp;noPays=1&amp;noProvince=6&amp;otherProvince=">
                Campbell River (1)
              </Link>
              <br />

              <Link to="/en/medical-housing/?city_id=b197850f0bbcce18372d48fd8cb45383&amp;city=Chilliwack&amp;noPays=1&amp;noProvince=6&amp;otherProvince=">
                Chilliwack (1)
              </Link>

              <br />

              <Link to="/en/medical-housing/?city_id=a0ae9b0b8bb6555d8bfe53d259daafa8&amp;city=Cobble+Hill&amp;noPays=1&amp;noProvince=6&amp;otherProvince=">
                Cobble Hill (2)
              </Link>
              <br />

              <Link to="/en/medical-housing/?city_id=a0ae9b0b8bb6555d8bfe53d259daafa8&amp;city=Cobble+Hill&amp;noPays=1&amp;noProvince=6&amp;otherProvince=">
                Cobble Hill (2)
              </Link>
              <br />
            </div>
          )}
          <div className="sec">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <span style={{ display: "flex" }}>
                florida(4)
                {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </span>
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <Link to="#">Calgary (19)</Link>
                <br />
                <Link to="#">Edmonton (19)</Link>
                <br />
                <Link to="#">Grande Prairie (19)</Link>
              </div>
            )}
          </div>
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
              Giogia(5)
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="#">Calgary (19)</Link>
              <br />
              <Link to="#">Edmonton (19)</Link>
              <br />
              <Link to="#">Grande Prairie (19)</Link>
            </div>
          )}
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span style={{ display: "flex" }}>
              Awaii(2)
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="#">Calgary (19)</Link>
              <br />
              <Link to="#">Edmonton (19)</Link>
              <br />
              <Link to="#">Grande Prairie (19)</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketFooter;
