import { Link } from "react-router-dom";

const CopyWrite = () => {
  return (
    <div className="copyWrite" style={{ marginTop: "100px", textAlign: "center" }}>
      <div
        className="bottom_link"
        style={{
          fontSize: "11px",
          color: "#85B8D5",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px"
        }}
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
          Site Map
        </Link>
      </div>
      <div className="mb-3">
        <p
          className="copyright"
          style={{
            fontSize: "10px",
            color: "#85B8D5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          © 2024 MedsHousing.com Built by
          <Link
            style={{
              textDecoration: "none",
              fontSize: "smaller",
              color: "#85B8D5",
              marginTop: "5px",
            }}
            to="https://www.numerique.ca"
            target="_blank"
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
