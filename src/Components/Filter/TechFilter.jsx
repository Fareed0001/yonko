// TechFilter.jsx
import React, { useState } from "react";

const TechFilter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    offers: false,
    under30min: false,
    techType: "", // Changed from petType
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
            Tech Type:
            <select
              value={filters.techType}
              onChange={(e) => handleFilterChange("techType", e.target.value)}
              className="techFilter"
            >
              <option value="">All</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Laptops">Laptops</option>
              <option value="Tablets">Tablets</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TechFilter;
