import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const SearchBar = ({ onSearch, dataArrays, predictionsProp }) => {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setShowPredictions(true);

    // Filter predictions as user types
    const combinedData = dataArrays.flat(); // concatenate all data arrays into one
    const newPredictions = combinedData.flatMap((item) => {
      if (item.menu) {
        return item.menu.filter(
          (menuItem) =>
            menuItem.name &&
            menuItem.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
        );
      } else {
        return [];
      }
    });
    setPredictions(newPredictions);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(predictions);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowPredictions(false);
    }
  };

  const handlePredictionClick = (parentObj) => {
    const { routeCategory, id } = parentObj;
    navigate(`/${routeCategory}/${id}`);
  };

  useEffect(() => {
    setPredictions(predictionsProp);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [predictionsProp]);

  return (
    <div className="gen" ref={searchRef}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Product Name..."
          value={query}
          onChange={handleInputChange}
        />
      </form>
      {showPredictions && (
        <div className="gensearch">
          {/* Display predictions here */}
          <div className="predall">
            <ul className="pred">
              {predictions.map((prediction, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handlePredictionClick(prediction.parentObj);
                    }}
                    className="anc"
                  >
                    {prediction.name} - ₦{prediction.price}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
