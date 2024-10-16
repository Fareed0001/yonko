import React from "react";
import { Link } from "react-router-dom";

const TechList = ({ techSupplies }) => {
  return (
    <div className="restaurants">
      {techSupplies && techSupplies.length > 0 ? (
        <div className="restlist">
          {techSupplies.map((techSupply) => (
            <Link
              key={techSupply.id}
              to={`/tech/${techSupply.id}`}
              className="a"
            >
              <div className="restall">
                <div className="imgcon">
                  <img src={techSupply.image} alt={techSupply.name} />
                  <div className="resdetails">
                    <div className="resname">
                      <h2>{techSupply.name}</h2>
                      <p>{techSupply.category}</p>
                    </div>
                    <div className="loctime">
                      <p>{techSupply.deliveryTime}</p>
                      {techSupply.location && <p>{techSupply.location}</p>}
                    </div>
                  </div>
                </div>
                <div className="rate">
                  <p>{techSupply.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No tech supplies available</div>
      )}
    </div>
  );
};

export default TechList;
