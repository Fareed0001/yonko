// ClothingFilter.jsx
import React, { useState } from "react";

const ClothingFilter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    offers: false,
    under30min: false,
    clothingType: "", // Changed from petType
  });

  const handleFilterChange = (filter, value) => {
    setFilters({ ...filters, [filter]: value });
    applyFilters({ ...filters, [filter]: value });
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
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
        <label>
          <input
            type="checkbox"
            checked={filters.under30min}
            onChange={(e) => handleFilterChange("under30min", e.target.checked)}
          />
          Under 30 min
        </label>
      </div>

      <div>
        <div className="filters">
          <label>
            Clothing Type:
            <select
              value={filters.clothingType}
              onChange={(e) =>
                handleFilterChange("clothingType", e.target.value)
              }
              className="clothingFilter"
            >
              <option value="">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value="Jewerly">Jewerly</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClothingFilter;
