import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.4572, 9.0797], // Maitama, Abuja coordinates
      zoom: 12,
    });

    // Clean up
    return () => map.remove();
  }, []); // Ensure the map is only initialized once

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default Map;
