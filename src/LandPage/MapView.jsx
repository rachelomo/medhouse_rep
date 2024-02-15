import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const MapView = () => {
  useEffect(() => {
    const googleMap = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 10,
      }
    );
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "100vh" }}>
      <FaMapMarkerAlt />
    </div>
  );
};

export default MapView;
