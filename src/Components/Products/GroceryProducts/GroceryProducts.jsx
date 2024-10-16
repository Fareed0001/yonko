// GroceryProducts.jsx
import React, { useState } from "react";
import GroceryList from "./GroceryList";
import groceryData from "../../../assets/data/grocerydata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import GroceryFilter from "../../Filter/GroceryFilter"; // Import the GroceryFilter component

const GroceryProducts = () => {
  const { onlineGroceries, localGroceries } = groceryData;
  const [filteredGroceries, setFilteredGroceries] = useState(
    localGroceries.concat(onlineGroceries)
  );

  const applyFilters = (filters) => {
    let filtered = localGroceries.concat(onlineGroceries);
    // Apply filters based on criteria
    if (filters.under30min) {
      // Apply filter for under 30 minutes delivery
      filtered = filtered.filter(
        (grocery) => grocery.deliveryTime === "20-30 minutes"
      );
    }
    if (filters.minRating > 0) {
      // You may need to adjust this depending on your data structure
      filtered = filtered.filter(
        (grocery) => grocery.rating >= filters.minRating
      );
    }
    if (filters.groceryType) {
      // Apply filter for grocery type
      filtered = filtered.filter(
        (grocery) => grocery.category === filters.groceryType
      );
    }
    // Apply more filters as needed
    setFilteredGroceries(filtered);
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
        {/* Pass the applyFilters function to the GroceryFilter component */}
        <GroceryFilter applyFilters={applyFilters} />
      </div>
      <div className="grocery-section">
        {/* Render the GroceryList component with filtered groceries */}
        <GroceryList grocerySupplies={filteredGroceries} />
      </div>
    </div>
  );
};

export default GroceryProducts;
