import React from "react";
import { Link } from "react-router-dom";

const BeautyList = ({ beautyProducts }) => {
  if (!beautyProducts || beautyProducts.length === 0) {
    return <div>No beauty products available</div>;
  }

  return (
    <div className="restaurants">
      <div className="restlist">
        {beautyProducts.map((beautyProduct) => (
          <Link
            key={beautyProduct.id}
            to={`/beauty/${beautyProduct.id}`}
            className="a"
          >
            <div className="restall">
              <div className="imgcon">
                <img src={beautyProduct.image} alt={beautyProduct.name} />
                <div className="resdetails">
                  <div className="resname">
                    <h2>{beautyProduct.name}</h2>
                    <p>{beautyProduct.category}</p>
                  </div>
                  <div className="loctime">
                    <p>{beautyProduct.deliveryTime}</p>
                    {beautyProduct.location && <p>{beautyProduct.location}</p>}
                  </div>
                </div>
              </div>
              <div className="rate">
                <p>{beautyProduct.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BeautyList;
