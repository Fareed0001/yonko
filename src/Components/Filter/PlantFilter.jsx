// PlantFilter.jsx
import React, { useState } from "react";

const PlantFilter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    offers: false,
    under30min: false,
    plantType: "", // Changed from petType
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
            Plant Type:
            <select
              value={filters.plantType}
              onChange={(e) => handleFilterChange("plantType", e.target.value)}
              className="plantFilter"
            >
              <option value="">All</option>
              <option value="Succulents">Succulents</option>
              <option value="Flowering Plants">Flowering Plants</option>
              <option value="Foliage Plants">Foliage Plants</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlantFilter;
