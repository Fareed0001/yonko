import React from "react";
import { Link } from "react-router-dom";

const ClothingList = ({ clothingItems }) => {
  return (
    <div className="restaurants">
      {clothingItems && clothingItems.length > 0 ? (
        <div className="restlist">
          {clothingItems.map((clothingItem) => (
            <Link
              key={clothingItem.id}
              to={`/clothing/${clothingItem.id}`}
              className="a"
            >
              <div className="restall">
                <div className="imgcon">
                  <img src={clothingItem.image} alt={clothingItem.name} />
                  <div className="resdetails">
                    <div className="resname">
                      <h2>{clothingItem.name}</h2>
                      <p>{clothingItem.category}</p>
                    </div>
                    <div className="loctime">
                      <p>{clothingItem.deliveryTime}</p>
                      {clothingItem.location && <p>{clothingItem.location}</p>}
                    </div>
                  </div>
                </div>
                <div className="rate">
                  <p>{clothingItem.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No clothing items available</div>
      )}
    </div>
  );
};

export default ClothingList;
