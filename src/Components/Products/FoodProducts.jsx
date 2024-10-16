import React, { useState } from "react";
import RestaurantsList from "./RestaurantsList";
import data from "../../assets/data/restaurantsdata.json";
import Navbar from "../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import GeneralFilter from "../Filter/GeneralFilter";

const FoodProducts = () => {
  const { onlineRestaurants, localRestaurants } = data;
  const [filteredRestaurants, setFilteredRestaurants] = useState(
    localRestaurants.concat(onlineRestaurants)
  );

  const applyFilters = (filters) => {
    let filtered = localRestaurants.concat(onlineRestaurants);
    if (filters.under30min) {
      filtered = filtered.filter(
        (restaurant) => restaurant.deliveryTime === "20-30 minutes"
      );
    }
    if (filters.minRating > 0) {
      filtered = filtered.filter(
        (restaurant) => restaurant.rating >= filters.minRating
      );
    }
    if (filters.restaurantType) {
      filtered = filtered.filter(
        (restaurant) => restaurant.category === filters.restaurantType
      );
    }
    setFilteredRestaurants(filtered);
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
      <div className="restaurant-section">
        <RestaurantsList restaurants={filteredRestaurants} />
      </div>
    </div>
  );
};

export default FoodProducts;
