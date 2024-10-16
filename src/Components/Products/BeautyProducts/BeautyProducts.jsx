// BeautyProducts.jsx
import React, { useState } from "react";
import BeautyList from "./BeautyList";
import beautyData from "../../../assets/data/beautydata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import BeautyFilter from "../../Filter/BeautyFilter"; // Import the BeautyFilter component

const BeautyProducts = () => {
  const { onlineSpas, localSpas } = beautyData;
  const [filteredBeautyProducts, setFilteredBeautyProducts] = useState(
    localSpas.concat(onlineSpas)
  );

  const applyFilters = (filters) => {
    let filtered = localSpas.concat(onlineSpas);

    if (filters.offers) {
      filtered = filtered.filter((beautyProduct) => beautyProduct.offers);
    }

    if (filters.under30min) {
      filtered = filtered.filter(
        (beautyProduct) => beautyProduct.deliveryTime === "20-30 minutes"
      );
    }

    if (filters.beautyType) {
      filtered = filtered.filter(
        (beautyProduct) => beautyProduct.category === filters.beautyType
      );
    }

    setFilteredBeautyProducts(filtered);
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
        {/* Pass the applyFilters function to the BeautyFilter component */}
        <BeautyFilter applyFilters={applyFilters} />
      </div>
      <div className="beauty-section">
        {/* Render the BeautyList component with filtered beauty products */}
        <BeautyList beautyProducts={filteredBeautyProducts} />
      </div>
    </div>
  );
};

export default BeautyProducts;
