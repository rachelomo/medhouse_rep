import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Messageme = () => {
  return (
    <div className="element">
      <div className="message">
        <Link to="https://web.facebook.com/v2.12/plugins/customer_chat/bubble">
          <FaFacebookMessenger
            className="text-3xl md:text-4xl" // Adjust icon size for mobile
            style={{
              lineHeight: "1.28",
              marginTop: "7px",
              color: "white",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Messageme;
  