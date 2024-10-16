import React from "react";
import { Link } from "react-router-dom";

const PlantList = ({ plantSupplies }) => {
  return (
    <div className="restaurants">
      {plantSupplies && plantSupplies.length > 0 ? (
        <div className="restlist">
          {plantSupplies.map((plantSupply) => (
            <Link
              key={plantSupply.id}
              to={`/plant/${plantSupply.id}`}
              className="a"
            >
              <div className="restall">
                <div className="imgcon">
                  <img src={plantSupply.image} alt={plantSupply.name} />
                  <div className="resdetails">
                    <div className="resname">
                      <h2>{plantSupply.name}</h2>
                      <p>{plantSupply.category}</p>
                    </div>
                    <div className="loctime">
                      <p>{plantSupply.deliveryTime}</p>
                      {plantSupply.location && <p>{plantSupply.location}</p>}
                    </div>
                  </div>
                </div>
                <div className="rate">
                  <p>{plantSupply.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No plant supplies available</div>
      )}
    </div>
  );
};

export default PlantList;
