import React from "react";
import { Link } from "react-router-dom";

const HouseList = ({ households }) => {
  return (
    <div className="restaurants">
      <div className="restlist">
        {households.map((household) => (
          <Link
            key={household.id}
            to={`/household/${household.id}`}
            className="a"
          >
            <div className="restall">
              <div className="imgcon">
                <img src={household.image} alt={household.name} />
                <div className="resdetails">
                  <div className="resname">
                    <h2>{household.name}</h2>
                    <p>{household.category}</p>
                  </div>
                  <div className="loctime">
                    <p>{household.deliveryTime}</p>
                    <p>{household.location}</p>
                  </div>
                </div>
              </div>
              <div className="rate">
                <p>{household.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
