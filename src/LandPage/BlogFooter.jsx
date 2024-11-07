import { useState } from "react";
import { Link } from "react-router-dom";

const medicalHousingData = [
  {
    id: 1,
    name: "Announcing partnership with NOVA SCOTIA, IPOANS and MedsHousing.com",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/410-307-0-62-2400-1875-87557ab3d24d3bed9dbbd663a54c7900c17339a58cf7ab1cd/20240209112418-ipoans-ns-and-mh-logo.jpeg",
    more: "Read More",
    extraText: "This is the extra content for the first item."
  },
  {
    id: 2,
    name: "Housing For Healthcare partnerships",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/410-307-207-0-1063-831-1a3518b21a409a4ffb93a2315710fe407f4639c7891a43a96/20240208192105-housing-for-healthcare-partnerships-feb-8-2024-1.jpg",
    more: "Read More",
    extraText: "This is the extra content for the second item."
  },

  {
    id: 3,
    title: "What is MedsHousing?",
    click: "Short clip to show the MedsHousing.com advantage",
    extraText: "This is the extra content for the third item."
  },
];

const BlogFooter = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id); // Toggle visibility
  };

  return (
    <div className="featured-medical-housing ">
   <Link
  to="/map"
  className="float-linkS hidden md:inline-block relative left-[76px]"
  style={{ textDecoration: "none", color: "#0c527b" }}
>
  View on map →
</Link>

      <h2>
        <strong style={{ color: "black" }}>Blog</strong>
      </h2>
      <div className="housing-cards-container">
        {medicalHousingData.map((housing) => (
          <div key={housing.id} className="housing-card">
            <img src={housing.imageUrl} alt={housing.name} className="housing-image" />
            <div className="housing-info">
              <Link to="/" style={{ textDecoration: "none" }}>
                <strong>{housing.name}</strong>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span>
                  <strong>{housing.title}</strong>
                  <br />
                  {housing.click}
                </span>
              </Link>
            </div>

            {/* Conditionally render the "Read more" or additional content */}
            {expandedId !== housing.id ? (
              <Link
                to="#"
                style={{ textDecoration: "none",}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleExpand(housing.id); // Expand the content
                }}
              >
                <i className="read-more">{housing.more}</i>
              </Link>
            ) : (
              <div className="extra-content">
                <p>{housing.extraText}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFooter;
