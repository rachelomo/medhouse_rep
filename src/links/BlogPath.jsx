import waitinRoom from "../images/slider_1.jpg";
import { Link } from "react-router-dom";
import card_13 from "../assets/card_13.jpeg";
import card_14 from "../assets/card_14.jpg";
import card_15 from "../assets/card_15.jpg";
import card_16 from "../assets/card_16.jpg";
import card_17 from "../assets/card_17.jpeg";
import card_18 from "../assets/card_18.jpg";
import card_19 from "../assets/card_19.jpg";
import card_20 from "../assets/card_20.png";
import card_21 from "../assets/card_21.jpg";
import card_22 from "../assets/card_22.jpg";
import card_23 from "../assets/card_23.jpg";
import card_24 from "../assets/card_24.jpg";
const BlogPath = () => {
  return (
    <div className="blogpath">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "8.8vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl">BLOG</p>
        </div>
      </div>
      <div>
        <div className="scimg">
          <img src={card_13} alt="card" />
          <img src={card_14} alt="card" />
          <img src={card_15} alt="card" />
          <img src={card_16} alt="card" />
          <img src={card_17} alt="card" />
          <img src={card_18} alt="card" />
          <img src={card_19} alt="card" />
          <img src={card_20} alt="card" />
          <img src={card_21} alt="card" />
          <img src={card_22} alt="card" />
          <img src={card_23} alt="card" />
          <img src={card_24} alt="card" />
        </div>
        <div style={{ display: "flex", gap: "0.6em", cursor: "pointer" }}>
          <Link to="/card/1">«</Link>
          <Link to="/card/1">1</Link>
          <Link to="/card/2">2</Link>
          <Link to="/card/3">3</Link>
          <Link to="/card/last">»</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPath;
