// HealthList.jsx

import React from "react";
import { Link } from "react-router-dom";

const HealthList = ({ pharmacies }) => {
  return (
    <div className="restaurants">
      <div className="restlist">
        {pharmacies.map((pharmacy) => (
          <Link key={pharmacy.id} to={`/pharmacy/${pharmacy.id}`} className="a">
            <div className="restall">
              <div className="imgcon">
                <img src={pharmacy.image} alt={pharmacy.name} />
                <div className="resdetails">
                  <div className="resname">
                    <h2>{pharmacy.name}</h2>
                    <p>{pharmacy.category}</p>
                  </div>
                  <div className="loctime">
                    <p>{pharmacy.deliveryTime}</p>
                    {pharmacy.location && <p>{pharmacy.location}</p>}
                  </div>
                </div>
              </div>
              <div className="rate">
                <p>{pharmacy.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HealthList;
