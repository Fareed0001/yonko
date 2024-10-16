import React, { useState } from "react";
import PetList from "./PetList";
import petSuppliesData from "../../../assets/data/petdata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import PetFilter from "../../Filter/PetFilter"; // Import the PetFilter component

const PetProducts = () => {
  const { onlinePetSupplies, localPetSupplies } = petSuppliesData;
  const [filteredPetProducts, setFilteredPetProducts] = useState(
    localPetSupplies.concat(onlinePetSupplies)
  );

  const applyFilters = (filters) => {
    let filtered = localPetSupplies.concat(onlinePetSupplies);

    if (filters.offers) {
      filtered = filtered.filter((petProduct) => petProduct.offers);
    }

    if (filters.under30min) {
      filtered = filtered.filter(
        (petProduct) => petProduct.deliveryTime === "20-30 minutes"
      );
    }

    if (filters.petType) {
      filtered = filtered.filter(
        (petProduct) => petProduct.category === filters.petType
      );
    }

    // Apply more filters as needed

    setFilteredPetProducts(filtered);
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
        {/* Pass the applyFilters function to the PetFilter component */}
        <PetFilter applyFilters={applyFilters} />
      </div>
      <div className="pet-section">
        {/* Render the PetList component with filtered pet products */}
        <PetList petSupplies={filteredPetProducts} />
      </div>
    </div>
  );
};

export default PetProducts;
