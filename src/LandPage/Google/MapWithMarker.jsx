// MapWithMarker.js
import React, { useEffect, useRef } from "react";

const MapWithMarker = ({ center }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Create the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: 8,
    });

    // Create the marker
    const marker = new window.google.maps.Marker({
      position: center,
      map: map,
      title: "Marker Title",
    });

    // Save references to map and marker
    markerRef.current = marker;
  }, [center]);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }}></div>;
};

export default MapWithMarker;
