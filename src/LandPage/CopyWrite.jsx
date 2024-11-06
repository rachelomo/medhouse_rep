import { Link } from "react-router-dom";

const CopyWrite = () => {
  return (
    <div className="copyWrite" style={{ marginTop: "100px" }}>
      <div
        className="bottom_link"
        style={{ fontSize: "11px", color: "#85B8D5", marginRight: "20px" }}
      >
        <Link to="#" style={{ textDecoration: "none" }}>
          Mission
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Pricing
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Add your Property
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Faq
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Blog
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Privacy/GDPR
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          sITE Map
        </Link>
      </div>
      <div>
        <p className="copyright flex flex-col">
          {" "}
          <span
            style={{
              fontSize: "10px",
            }}
          >
            {" "}
            © 2024 MedsHousing.com Built by
          </span>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "smaller",
            }}
            to="https://www.numerique.ca"
            target="blank"
            id="realisationFooter"
          >
            Numérique.ca
          </Link>
        </p>
      </div>
    </div>
  );
};
export default CopyWrite;
