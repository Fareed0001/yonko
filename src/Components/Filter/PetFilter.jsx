import React, { useState } from "react";

const PetFilter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    offers: false,
    under30min: false,
    petType: "", // Changed from householdType
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
            Pet Type:
            <select
              value={filters.petType}
              onChange={(e) => handleFilterChange("petType", e.target.value)}
              className="petFilter"
            >
              <option value="">All</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PetFilter;
