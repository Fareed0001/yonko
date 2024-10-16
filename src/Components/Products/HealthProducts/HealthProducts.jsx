import React, { useState } from "react";
import HealthList from "./HealthList";
import data from "../../../assets/data/drugsdata.json";
import Navbar from "../../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import GeneralFilter from "../../Filter/HealthFilter";

const HealthProducts = () => {
  const { onlinePharmacies, localPharmacies } = data;
  const [filteredPharmacies, setFilteredPharmacies] = useState(
    localPharmacies.concat(onlinePharmacies)
  );

  const applyFilters = (filters) => {
    let filtered = localPharmacies.concat(onlinePharmacies);
    if (filters.under30min) {
      filtered = filtered.filter(
        (pharmacy) => pharmacy.deliveryTime === "20-30 minutes"
      );
    }
    if (filters.minRating > 0) {
      // You may need to adjust this depending on your data structure
      filtered = filtered.filter(
        (pharmacy) => pharmacy.rating >= filters.minRating
      );
    }
    if (filters.pharmacyType) {
      filtered = filtered.filter(
        (pharmacy) => pharmacy.category === filters.pharmacyType
      );
    }
    setFilteredPharmacies(filtered);
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
        <GeneralFilter applyFilters={applyFilters} />
      </div>
      <div className="health-section">
        <HealthList pharmacies={filteredPharmacies} />
      </div>
    </div>
  );
};

export default HealthProducts;
