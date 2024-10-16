import React, { useState } from "react";

const HealthFilter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    offers: false,
    deliveryFee: false,
    under30min: false,
    minRating: 0,
    restaurantType: "", // Renamed to pharmacyType
    maxPrice: 2500, // Assuming maximum price
  });

  const handleFilterChange = (filter, value) => {
    setFilters({ ...filters, [filter]: value });
    applyFilters({ ...filters, [filter]: value });
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  const handleDeliveryFeeClick = () => {
    // Toggle delivery fee filter
    handleFilterChange("deliveryFee", !filters.deliveryFee);
  };

  const handlePriceChange = (e) => {
    handleFilterChange("maxPrice", parseInt(e.target.value));
  };

  return (
    <div className="generalfilter">
      <div className="filters">
        <label>
          <input
            type="checkbox"
            checked={filters.offers}
            onChange={(e) => handleFilterChange("offers", e.target.checked)}
          />
          Offers
        </label>
      </div>
      <div className="filters">
        <button onClick={handleDeliveryFeeClick} className="deli">
          Delivery Fee
        </button>
        {filters.deliveryFee && (
          <div className="deliveryrange">
            <div className="top">
              <h3>Select Price Range</h3>
            </div>
            <div className="deliverypricerange">
              <input
                type="range"
                min={1200}
                max={2500}
                step={433} // Adjusted step to match five price labels
                value={filters.maxPrice}
                style={{ width: "100%" }}
                onChange={handlePriceChange}
              />
              <div className="pricinglabels">
                <span>₦1200</span>
                <span>₦1633</span>
                <span>₦2066</span>
                <span>₦2500+</span>
              </div>
            </div>

            <div className="btn">
              <button onClick={handleApplyFilters}>Apply</button>
            </div>
          </div>
        )}
      </div>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            checked={filters.under30min}
            onChange={(e) => handleFilterChange("under30min", e.target.checked)}
          />
          Under 30 min
        </label>
      </div>
    </div>
  );
};

export default HealthFilter;
