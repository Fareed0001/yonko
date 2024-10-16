// PlantProducts.jsx
import React, { useState } from "react";
import PlantList from "./PlantList";
import plantData from "../../../assets/data/plantdata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import PlantFilter from "../../Filter/PlantFilter"; // Import the PlantFilter component

const PlantProducts = () => {
  const { onlinePlants, localPlants } = plantData;
  const [filteredPlantSupplies, setFilteredPlantSupplies] = useState(
    localPlants.concat(onlinePlants)
  );

  const applyFilters = (filters) => {
    let filtered = localPlants.concat(onlinePlants);
    // Apply filters based on criteria
    if (filters.offers) {
      // Apply filter for offers
      filtered = filtered.filter((plant) => plant.offer === true);
    }
    if (filters.under30min) {
      // Apply filter for under 30 minutes delivery
      filtered = filtered.filter((plant) => {
        const deliveryTime = plant.deliveryTime;
        const [min, max] = deliveryTime
          .split("-")
          .map((time) => parseInt(time));
        return min < 30 && max >= 30; // Check if the delivery time range includes 30 minutes
      });
    }
    if (filters.plantType) {
      // Apply filter for plant type
      filtered = filtered.filter(
        (plant) => plant.category === filters.plantType
      );
    }
    // Apply more filters as needed
    setFilteredPlantSupplies(filtered);
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
        {/* Pass the applyFilters function to the PlantFilter component */}
        <PlantFilter applyFilters={applyFilters} />
      </div>
      <div className="plant-section">
        {/* Render the PlantList component with filtered plant supplies */}
        <PlantList plantSupplies={filteredPlantSupplies} />
      </div>
    </div>
  );
};

export default PlantProducts;
