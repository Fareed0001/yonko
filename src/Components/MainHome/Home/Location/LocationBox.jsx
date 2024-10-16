import React, { useState } from "react";
import LocationAutocomplete from "./LocationAutocomplete";

const Location = () => {
  const [location, setLocation] = useState(null);
  const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiYmV5MjI5NyIsImEiOiJjbHN5d2Z2d3owN2lsMmxwOTZudjhsZTFrIn0.a7K7EM5Aq1X7FH3Z-JK2Uw";

  const handleLocationSelect = (address) => {
    // You can handle the selected location here
    console.log("Selected location:", address);
  };

  const handleLocationSubmit = async (address) => {
    try {
      const mapboxGeocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token= pk.eyJ1IjoiYmV5MjI5NyIsImEiOiJjbHN5d2Z2d3owN2lsMmxwOTZudjhsZTFrIn0.a7K7EM5Aq1X7FH3Z-JK2Uw`;

      const response = await fetch(mapboxGeocodingUrl);
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        setLocation({
          latitude,
          longitude,
        });
      } else {
        console.error("Invalid address");
      }
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  return (
    <div className="loc">
      <LocationAutocomplete onSelect={handleLocationSelect} />
    </div>
  );
};

export default Location;
