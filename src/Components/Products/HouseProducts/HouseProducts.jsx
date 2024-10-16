// HouseholdProducts.jsx
import React, { useState } from "react";
import HouseholdList from "./HouseList";
import data from "../../../assets/data/householddata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import HouseholdFilter from "../../Filter/HouseholdFilter"; // Import the HouseholdFilter component

const HouseholdProducts = () => {
  const { onlineHouseholdSupplies, localHouseholdSupplies } = data;
  const [filteredHouseholds, setFilteredHouseholds] = useState(
    localHouseholdSupplies.concat(onlineHouseholdSupplies)
  );

  const applyFilters = (filters) => {
    let filtered = localHouseholdSupplies.concat(onlineHouseholdSupplies);
    // Apply filters based on criteria
    if (filters.under30min) {
      // Apply filter for under 30 minutes delivery
      filtered = filtered.filter(
        (household) => household.deliveryTime === "20-30 minutes"
      );
    }
    if (filters.minRating > 0) {
      // You may need to adjust this depending on your data structure
      filtered = filtered.filter(
        (household) => household.rating >= filters.minRating
      );
    }
    if (filters.householdType) {
      // Apply filter for household type
      filtered = filtered.filter(
        (household) => household.category === filters.householdType
      );
    }
    // Apply more filters as needed
    setFilteredHouseholds(filtered);
  };

  return (
    <div className="resmain">
      <Navbar />
      <div className="back">
        <a href="/products">
          <IoMdArrowRoundBack className="iconback" />
        </a>
      </div>

      <div className="genfilter">
        {/* Pass the applyFilters function to the HouseholdFilter component */}
        <HouseholdFilter applyFilters={applyFilters} />
      </div>
      <div className="household-section">
        {/* Render the HouseholdList component with filtered households */}
        <HouseholdList households={filteredHouseholds} />
      </div>
    </div>
  );
};

export default HouseholdProducts;
