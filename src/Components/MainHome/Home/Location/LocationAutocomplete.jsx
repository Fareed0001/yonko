import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const LocationAutocomplete = () => {
  const [address, setAddress] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);
  const [showPredictions, setShowPredictions] = useState(false);
  const [selectedPrediction, setSelectedPrediction] = useState(null);

  const handleInputChange = (e) => {
    setAddress(e.target.value);
    setShowPredictions(e.target.value.trim() !== "");
    console.log("Address:", e.target.value); // Log input value
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!address) {
          setPredictions([]);
          return;
        }

        // Using OSM for auto-predictions
        const osmUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}&addressdetails=1&limit=5`;

        const osmResponse = await fetch(osmUrl);

        if (!osmResponse.ok) {
          throw new Error("Failed to fetch predictions from OSM");
        }

        const osmData = await osmResponse.json();
        const osmPredictions = osmData || [];

        setPredictions(osmPredictions);
        setError(null);
        console.log("OSM Predictions:", osmPredictions); // Log predictions from OSM
      } catch (error) {
        console.error("Error fetching predictions from OSM:", error);
        setPredictions([]);
        setError(error.message);
      }

      try {
        // Using Mapbox for geocoding
        const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          address
        )}.json?types=address&autocomplete=true&access_token=pk.eyJ1IjoiYmV5MjI5NyIsImEiOiJjbHQxbTgzcncxNDJ2MmpwMmRleWFqYWRxIn0.P6dI9jAj7sJC8rET1iO6wQ`;

        const mapboxResponse = await fetch(mapboxUrl);

        if (!mapboxResponse.ok) {
          throw new Error("Failed to fetch predictions from Mapbox");
        }

        const mapboxData = await mapboxResponse.json();
        const mapboxPredictions = mapboxData.features || [];

        setPredictions((prevPredictions) => [
          ...prevPredictions,
          ...mapboxPredictions,
        ]);
        setError(null);
        console.log("Mapbox Predictions:", mapboxPredictions); // Log predictions from Mapbox
      } catch (error) {
        console.error("Error fetching predictions from Mapbox:", error);
        setPredictions([]);
        setError(error.message);
      }
    };

    const timeoutId = setTimeout(fetchData, 300);
    return () => clearTimeout(timeoutId);
  }, [address]);

  const handleSelect = (prediction) => {
    setSelectedPrediction(prediction);
    setShowPredictions(false); // Close predictions container
  };

  return (
    <div className="autoall">
      <div className="auto">
        <div className="in">
          <CiLocationArrow1 className="locate" />
          <input
            value={address}
            onChange={handleInputChange}
            placeholder="Enter your location"
          />
        </div>
      </div>

      {error && <div>Error: {error}</div>}

      {showPredictions && predictions && predictions.length > 0 && (
        <div className="predictions">
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                <Link
                  to="/products"
                  onClick={() => handleSelect(prediction)}
                  className="link"
                >
                  <FaMapMarkerAlt
                    style={{ marginRight: "5px", color: "white" }}
                  />
                  {prediction.place_name || prediction.display_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Popup for selected prediction */}
      {selectedPrediction && (
        <div className="popup">
          <h2>Selected Location:</h2>
          <p>
            {selectedPrediction.place_name || selectedPrediction.display_name}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
