// GroceryDetails.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import groceryData from "../../../assets/data/grocerydata.json";
import { Parallax } from "react-parallax";
import Navbar from "../../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import BasketPopup from "./BasketPopup"; // Import BasketPopup component
import { IoMdArrowRoundBack } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiDiscount1 } from "react-icons/ci";
import GroceryModal from "./GroceryModal";

const GroceryDetails = () => {
  const { grocerySupplyId } = useParams();
  const { onlineGroceries, localGroceries } = groceryData;
  const allGroceries = [...localGroceries, ...onlineGroceries];
  const basketRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showGroceryModal, setShowGroceryModal] = useState(false);
  const [basket, setBasket] = useState([]);
  const [showBasketPopup, setShowBasketPopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const grocerySupply = allGroceries.find(
    (grocerySupply) => grocerySupply.id === parseInt(grocerySupplyId)
  );

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

  const handleAddToBasket = (dishIndex) => {
    const selectedDish = grocerySupply.menu[dishIndex];

    if (selectedDish) {
      const existingItemIndex = basket.findIndex(
        (item) => item.name === selectedDish.name
      );
      if (existingItemIndex !== -1) {
        const updatedBasket = [...basket];
        updatedBasket[existingItemIndex].quantity++;
        setBasket(updatedBasket);
      } else {
        setBasket([...basket, { ...selectedDish, quantity: 1 }]);
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
    // Redirect back to the grocery details page after payment
    navigate(`/groceries/${grocerySupplyId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowGroceryModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      {grocerySupply && (
        <>
          <Parallax
            strength={400}
            blur={{ min: 0.5, max: 0.5 }}
            bgImage={grocerySupply.image}
            className="pa1"
          />
          <div className="back">
            <Link to="/groceries">
              <IoMdArrowRoundBack className="iconback" />
            </Link>
          </div>
          <div className="details">
            <div className="left">
              <h2>{grocerySupply.name}</h2>
              <p>{grocerySupply.location}</p>
              <p>{grocerySupply.deliveryTime}</p>
              <p className="cat">{grocerySupply.category}</p>
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
                <FaStar className="icon" /> {grocerySupply.rating}
              </p>
            </div>
          </div>
          <div className="menu">
            <div className="top">
              <h3>Menu</h3>
            </div>
            <div className="dishes">
              <ul>
                {grocerySupply.menu.map((item, index) => (
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
                          className="btnadd"
                          onClick={() => handleProductClick(item)}
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

          {showGroceryModal && (
            <GroceryModal
              product={selectedProduct}
              isOpen={showGroceryModal}
              onRequestClose={() => setShowGroceryModal(false)}
              fullDescription={selectedProduct.fullDescription}
              onAddToBasket={() =>
                handleAddToBasket(grocerySupply.menu.indexOf(selectedProduct))
              }
            />
          )}

          {showBasketPopup && (
            <BasketPopup
              basket={basket}
              onClose={toggleBasketPopup}
              grocerySupplyName={grocerySupply.name} // Change restaurantName to grocerySupplyName
              onDeleteItem={handleDeleteItem}
              onPaymentSuccess={handlePaymentSuccess} // Pass the handlePaymentSuccess function
            />
          )}

          {/* Order confirmation popup */}
          {showOrderConfirmation && (
            <div className="order-confirmation">
              <p>Your order has been placed!</p>
              <button onClick={() => setShowOrderConfirmation(false)}>
                Close
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GroceryDetails;
