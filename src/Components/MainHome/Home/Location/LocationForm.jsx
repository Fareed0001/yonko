import React, { useState } from "react";

const LocationForm = ({ onLocationSubmit }) => {
  const [locationInput, setLocationInput] = useState("");

  const handleInputChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mapboxGeocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        locationInput
      )}.json?access_token=pk.eyJ1IjoiYmV5MjI5NyIsImEiOiJjbHN5d2Z2d3owN2lsMmxwOTZudjhsZTFrIn0.a7K7EM5Aq1X7FH3Z-JK2Uw`;

      const response = await fetch(mapboxGeocodingUrl);
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        onLocationSubmit({ latitude, longitude });
      } else {
        console.error("Invalid location");
      }
    } catch (error) {
      console.error("Error geocoding location:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="innerloc">
      <label>
        Enter your location:
        <input
          type="text"
          value={locationInput}
          onChange={handleInputChange}
          className="custom-input" // Add your custom class here
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationForm;
