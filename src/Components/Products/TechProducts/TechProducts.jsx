import React, { useState } from "react";
import TechList from "./TechList";
import data from "../../../assets/data/techdata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import TechFilter from "../../Filter/TechFilter"; // Import the TechFilter component

const TechProducts = () => {
  const { onlineTechSupplies, localTechSupplies } = data;
  const [filteredTechProducts, setFilteredTechProducts] = useState(
    localTechSupplies.concat(onlineTechSupplies)
  );

  const applyFilters = (filters) => {
    let filtered = localTechSupplies.concat(onlineTechSupplies);
    // Apply filters based on criteria
    if (filters.offers) {
      // Apply filter for offers
      filtered = filtered.filter((techProduct) => techProduct.offer === true);
    }
    if (filters.under30min) {
      // Apply filter for under 30 minutes delivery
      filtered = filtered.filter((techProduct) => {
        const deliveryTime = techProduct.deliveryTime;
        const [min, max] = deliveryTime
          .split("-")
          .map((time) => parseInt(time));
        return min < 30 && max >= 30; // Check if the delivery time range includes 30 minutes
      });
    }
    if (filters.techType) {
      // Apply filter for tech type
      filtered = filtered.filter(
        (techProduct) => techProduct.category === filters.techType
      );
    }
    // Apply more filters as needed
    setFilteredTechProducts(filtered);
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
        {/* Pass the applyFilters function to the TechFilter component */}
        <TechFilter applyFilters={applyFilters} />
      </div>
      <div className="tech-section">
        {/* Render the TechList component with filtered tech products */}
        <TechList techSupplies={filteredTechProducts} />
      </div>
    </div>
  );
};

export default TechProducts;
