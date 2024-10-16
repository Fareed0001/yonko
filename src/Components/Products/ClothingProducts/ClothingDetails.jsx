import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import clothingData from "../../../assets/data/clothingdata.json";
import { Parallax } from "react-parallax";
import Navbar from "../../Navbar/Navbar";
import { FaStar } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import BasketPopup from "./BasketPopup"; // Import BasketPopup component
import { IoMdArrowRoundBack } from "react-icons/io";
import DatePicker from "react-datepicker";
import { CiDiscount1 } from "react-icons/ci";

import "react-datepicker/dist/react-datepicker.css";
import ClothingModal from "./ClothingModal";

const ClothingDetails = () => {
  const { clothingId } = useParams();
  const { onlineClothingItems, localClothingItems } = clothingData;
  const allClothingItems = [...localClothingItems, ...onlineClothingItems];
  const basketRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showClothModal, setShowClothModal] = useState(false);
  const [basket, setBasket] = useState([]);
  const [showBasketPopup, setShowBasketPopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (basketRef.current && !basketRef.current.contains(event.target)) {
        setShowBasketPopup(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Find the clothing item with the matching clothingId
  const clothingItem = allClothingItems.find(
    (clothingItem) => clothingItem.id === parseInt(clothingId)
  );

  if (!clothingItem) {
    return <div>Clothing item not found</div>;
  }

  const handleAddToBasket = (itemIndex) => {
    const selectedItem = clothingItem.menu[itemIndex];

    if (selectedItem) {
      const existingItemIndex = basket.findIndex(
        (item) => item.name === selectedItem.name
      );
      if (existingItemIndex !== -1) {
        const updatedBasket = [...basket];
        updatedBasket[existingItemIndex].quantity++;
        setBasket(updatedBasket);
      } else {
        setBasket([...basket, { ...selectedItem, quantity: 1 }]);
      }
      setShowBasketPopup(true);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
  };

  const toggleBasketPopup = () => {
    setShowBasketPopup(!showBasketPopup);
  };

  const handlePaymentSuccess = () => {
    // Redirect back to the spa details page after payment
    navigate(`/clothings${clothingId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowClothModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={clothingItem.image}
          className="pa1"
        ></Parallax>

        <div className="back">
          <Link to="/clothings/*">
            <IoMdArrowRoundBack className="iconback" />
          </Link>
        </div>

        <div className="details">
          <div className="left">
            <h2>{clothingItem.name}</h2>
            <p>{clothingItem.location}</p>
            <p>{clothingItem.deliveryTime}</p>
            <p className="cat">{clothingItem.category}</p>
            <div className="bookings">
              <button onClick={toggleDatePicker}>
                <p>
                  <MdSchedule />
                  Book
                </p>
              </button>
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="book"
                />
              )}
            </div>
          </div>
          <div className="right">
            <p>
              <FaStar className="icon" /> {clothingItem.rating}
            </p>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="top">
          <h3>Menu</h3>
        </div>
        <div className="dishes">
          <ul>
            {clothingItem.menu.map((item, index) => (
              <li key={index}>
                <div
                  className="alldish"
                  onClick={() => handleProductClick(item)}
                >
                  <div className="imgcon">
                    <img src={item.image} alt={item.name} />
                    <div className="desc">
                      <p>{item.name}</p>
                      <p className="price">
                        {item.discount ? (
                          <>
                            <del>₦ {item.price}</del> ₦ {item.discountPrice}
                          </>
                        ) : (
                          `₦ ${item.price}`
                        )}
                      </p>
                      <p>{item.description}</p>
                      {item.discount && (
                        <span className="discount-symbol">
                          <CiDiscount1 />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="add">
                    <button
                      onClick={() => handleProductClick(item)}
                      className="btnadd"
                    >
                      <IoMdAdd className="icon" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showClothModal && (
        <ClothingModal
          product={selectedProduct}
          isOpen={showClothModal}
          onRequestClose={() => setShowClothModal(false)}
          fullDescription={selectedProduct.fullDescription}
          onAddToBasket={() =>
            handleAddToBasket(clothingItem.menu.indexOf(selectedProduct))
          }
        />
      )}

      {/* Basket popup */}
      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          clothingItemName={clothingItem.name}
          onDeleteItem={handleDeleteItem} // Pass the onDeleteItem function
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Order confirmation popup */}
      {showOrderConfirmation && (
        <div className="order-confirmation">
          <p>Your order has been placed!</p>
          <button onClick={() => setShowOrderConfirmation(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ClothingDetails;
