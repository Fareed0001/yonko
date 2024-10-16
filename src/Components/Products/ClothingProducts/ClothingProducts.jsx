// ClothingProducts.jsx
import React, { useState } from "react";
import ClothingList from "./ClothingList";
import data from "../../../assets/data/clothingdata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import ClothingFilter from "../../Filter/ClothingFilter"; // Import the ClothingFilter component

const ClothingProducts = () => {
  const { onlineClothingItems, localClothingItems } = data;
  const [filteredClothingItems, setFilteredClothingItems] = useState(
    localClothingItems.concat(onlineClothingItems)
  );

  const applyFilters = (filters) => {
    let filtered = localClothingItems.concat(onlineClothingItems);
    // Apply filters based on criteria
    if (filters.offers) {
      // Apply filter for offers
      filtered = filtered.filter((clothingItem) => clothingItem.offer === true);
    }
    if (filters.under30min) {
      // Apply filter for under 30 minutes delivery
      filtered = filtered.filter((clothingItem) => {
        const deliveryTime = clothingItem.deliveryTime;
        const [min, max] = deliveryTime
          .split("-")
          .map((time) => parseInt(time));
        return min < 30 && max >= 30; // Check if the delivery time range includes 30 minutes
      });
    }
    if (filters.clothingType) {
      // Apply filter for clothing type
      filtered = filtered.filter(
        (clothingItem) => clothingItem.category === filters.clothingType
      );
    }
    // Apply more filters as needed
    setFilteredClothingItems(filtered);
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
        {/* Pass the applyFilters function to the ClothingFilter component */}
        <ClothingFilter applyFilters={applyFilters} />
      </div>
      <div className="clothing-section">
        {/* Render the ClothingList component with filtered clothing items */}
        <ClothingList clothingItems={filteredClothingItems} />
      </div>
    </div>
  );
};

export default ClothingProducts;
