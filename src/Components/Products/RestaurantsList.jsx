// RestaurantsList.jsx
import React from "react";
import { Link } from "react-router-dom";

const RestaurantsList = ({ restaurants }) => {
  return (
    <div className="restaurants">
      <div className="restlist">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurant/${restaurant.id}`}
            className="a"
          >
            {" "}
            {/* Use Link component */}
            <div className="restall">
              <div className="imgcon">
                <img src={restaurant.image} alt={restaurant.name} />
                <div className="resdetails">
                  <div className="resname">
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.category}</p>
                  </div>
                  <div className="loctime">
                    <p>{restaurant.deliveryTime}</p>
                    <p>{restaurant.location}</p>
                  </div>
                </div>
              </div>
              <div className="rate">
                <p>{restaurant.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
