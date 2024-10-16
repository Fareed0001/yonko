// GroceryList.jsx
import React from "react";
import { Link } from "react-router-dom";

const GroceryList = ({ grocerySupplies }) => {
  return (
    <div className="restaurants">
      {grocerySupplies && grocerySupplies.length > 0 ? (
        <div className="restlist">
          {grocerySupplies.map((grocerySupply) => (
            <Link
              key={grocerySupply.id}
              to={`/grocery/${grocerySupply.id}`}
              className="a"
            >
              <div className="restall">
                <div className="imgcon">
                  <img src={grocerySupply.image} alt={grocerySupply.name} />
                  <div className="resdetails">
                    <div className="resname">
                      <h2>{grocerySupply.name}</h2>
                      <p>{grocerySupply.category}</p>
                    </div>
                    <div className="loctime">
                      <p>{grocerySupply.deliveryTime}</p>
                      {grocerySupply.location && (
                        <p>{grocerySupply.location}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="rate">
                  <p>{grocerySupply.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No grocery supplies available</div>
      )}
    </div>
  );
};

export default GroceryList;
