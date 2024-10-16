import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbPackageImport } from "react-icons/tb";

const DishModal = ({
  dish,
  isOpen,
  onRequestClose,
  fullDescription,
  onAddToBasket,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="inpop">
      <button onClick={onRequestClose}>
        <IoMdClose />
      </button>

      <div className="flexing">
        <div className="imgcon">
          {dish.imageGallery && dish.imageGallery.length > 0 && (
            <img
              src={dish.imageGallery[selectedImageIndex]}
              className="image"
            />
          )}
          {dish.imageGallery && (
            <div className="overflow">
              <div className="image-gallery">
                {dish.imageGallery.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    className={index === selectedImageIndex ? "selected" : ""}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="words">
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          {fullDescription && (
            <div className="des">
              <h3>Full Description:</h3>
              <p>{fullDescription}</p>
            </div>
          )}
          <p>Price: ₦{dish.price}</p>
          {dish.discount && (
            <p>
              Discount: <strike>₦ {dish.price}</strike> ₦ {dish.discountPrice}
            </p>
          )}

          {/* Add this line */}

          <div className="infocon">
            <div className="deli">
              <div className="top">
                <TbPackageImport className="iconn" />
                <h5>Return Policy</h5>
              </div>

              <div className="door">
                <p>
                  We stand behind our vendors with a 5-days money-back
                  guarantee.
                </p>
                <a href="">More Info</a>
              </div>
            </div>

            <div className="deli">
              <div className="top">
                <CiDeliveryTruck className="iconn" />
                <h5>Doorstep Delivery</h5>
              </div>

              <div className="door">
                <p>
                  We'll deliver your order to your doorstep, at a time that
                  suits you.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="addtob">
        <button onClick={() => onAddToBasket(dish)}>
          Add to Basket
          <FaShoppingBasket />
        </button>{" "}
      </div>
    </Modal>
  );
};

export default DishModal;
