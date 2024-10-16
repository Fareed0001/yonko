import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import data from "../../../assets/data/householddata.json";
import { FaStar } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import BasketPopup from "./BasketPopup"; // Import BasketPopup component
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../../Navbar/Navbar";
import { Parallax } from "react-parallax";
import DatePicker from "react-datepicker";
import { CiDiscount1 } from "react-icons/ci";
import HouseModal from "./HouseModal";
import "react-datepicker/dist/react-datepicker.css";

const HouseholdDetails = () => {
  const { householdId } = useParams();
  const { onlineHouseholdSupplies, localHouseholdSupplies } = data;
  const allHouseholds = [...localHouseholdSupplies, ...onlineHouseholdSupplies];
  const basketRef = useRef(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showHouseModal, setShowHouseModal] = useState(false);
  const [household, setHousehold] = useState(null);
  const [basket, setBasket] = useState([]);
  const [showBasketPopup, setShowBasketPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const selectedHousehold = allHouseholds.find(
      (household) => household.id === parseInt(householdId)
    );
    setHousehold(selectedHousehold);
  }, [householdId, allHouseholds]);

  if (!household) {
    return <div>Household not found</div>;
  }

  const handleAddToBasket = (itemIndex) => {
    const selectedItem = household.menu[itemIndex];

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
    // Redirect back to the restaurant details page after payment
    navigate(`/households/${householdId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowHouseModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={household.image}
          className="pa1"
        ></Parallax>

        <div className="back">
          <a href="/households/*">
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <div className="details">
          <div className="left">
            <h2>{household.name}</h2>
            <p>{household.location}</p>
            <p>{household.deliveryTime}</p>
            <p className="cat">{household.category}</p>
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
              <FaStar className="icon" /> {household.rating}
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
            {household.menu.map((item, index) => (
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

      {showHouseModal && (
        <HouseModal
          product={selectedProduct}
          isOpen={showHouseModal}
          onRequestClose={() => setShowHouseModal(false)}
          fullDescription={selectedProduct.fullDescription}
          onAddToBasket={() =>
            handleAddToBasket(household.menu.indexOf(selectedProduct))
          }
        />
      )}

      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          householdName={household.name}
          onDeleteItem={handleDeleteItem}
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

export default HouseholdDetails;
