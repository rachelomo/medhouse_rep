import Navigation from "./component/Navigation.jsx";
// import DropdownMenu from "./component/Dropdown.jsx";
import Dropdown_sec from "./component/Dropdown_sec.jsx";
import Dropdown_Thrd from "./component/Dropdown_Thrd.jsx";
import Price from "./component/Price.jsx";
import BLog from "./component/BLog.jsx";
import SearchButton from "./component/SearchButton.jsx";
import AboutUs from "./component/AboutUs.jsx";
import Adds from "./component/Adds.jsx";

import Faq from "./component/Faq.jsx";
import Dropdown from "./component/Dropdown.jsx";
import MenuIcon from "./component/MenuIcon.jsx";
const Nav = () => {
  return (
    <>
      <div className="Drop_app">
        <Navigation />
        <MenuIcon />
        <div className="Drop">
          <Dropdown />
          <Dropdown_sec />
          <Dropdown_Thrd />
          <Price />
          <Faq />
          <BLog />
          <AboutUs />
          <Adds />
        </div>
        <SearchButton />
      </div>
    </>
  );
};

export default Nav;
