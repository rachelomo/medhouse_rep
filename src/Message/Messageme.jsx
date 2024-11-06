import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Messageme = () => {
  return (
    <div className="element">
      <div className="message">
        <Link to="https://web.facebook.com/v2.12/plugins/customer_chat/bubble">
          <FaFacebookMessenger
            className="text-4xl"
            style={{
              lineHeight: " 1.28",
              color: "#f8c8dc",
              marginTop: "7px",
            }}
          ></FaFacebookMessenger>
        </Link>
      </div>
    </div>
  );
};

export default Messageme;
