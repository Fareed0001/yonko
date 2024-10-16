import React from "react";
import { Link } from "react-router-dom";

const PetList = ({ petSupplies }) => {
  return (
    <div className="restaurants">
      <div className="restlist">
        {petSupplies.map((petSupply) => (
          <Link key={petSupply.id} to={`/pet/${petSupply.id}`} className="a">
            <div className="restall">
              <div className="imgcon">
                <img src={petSupply.image} alt={petSupply.name} />
                <div className="resdetails">
                  <div className="resname">
                    <h2>{petSupply.name}</h2>
                    <p>{petSupply.category}</p>
                  </div>
                  <div className="loctime">
                    <p>{petSupply.deliveryTime}</p>
                    {petSupply.location && <p>{petSupply.location}</p>}
                  </div>
                </div>
              </div>
              <div className="rate">
                <p>{petSupply.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PetList;
