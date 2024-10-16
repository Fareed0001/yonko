import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../assets/data/restaurantsdata.json";
import { Parallax } from "react-parallax";
import Navbar from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd, IoMdArrowRoundBack } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import BasketPopup from "./BasketPopup";
import DatePicker from "react-datepicker";
import DishModal from "./DishModal";
import "react-datepicker/dist/react-datepicker.css";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const { onlineRestaurants, localRestaurants } = data;
  const allRestaurants = [...localRestaurants, ...onlineRestaurants];
  const basketRef = useRef(null);
  const navigate = useNavigate();
  const [selectedDish, setSelectedDish] = useState(null);
  const [showDishModal, setShowDishModal] = useState(false);
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

  const restaurant = allRestaurants.find(
    (restaurant) => restaurant.id === parseInt(restaurantId)
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handleAddToBasket = (dish) => {
    const existingItemIndex = basket.findIndex(
      (item) => item.name === dish.name
    );
    if (existingItemIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket[existingItemIndex].quantity++;
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...dish, quantity: 1 }]);
    }
    setShowBasketPopup(true);
  };

  const handleDeleteItem = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
  };

  const toggleBasketPopup = () => {
    setShowBasketPopup(!showBasketPopup);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handlePaymentSuccess = () => {
    // Redirect back to the restaurant details page after payment
    navigate(`/restaurants/${restaurantId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    setShowDishModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={restaurant.image}
          className="pa1"
        ></Parallax>

        <div className="back">
          <a href="/restaurants/*">
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <div className="details">
          <div className="left">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.location}</p>
            <p>{restaurant.deliveryTime}</p>
            <p className="cat">{restaurant.category}</p>
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
              <FaStar className="icon" /> {restaurant.rating}
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
            {restaurant.menu.map((item, index) => (
              <li key={index}>
                <div className="alldish" onClick={() => handleDishClick(item)}>
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
                      onClick={() => handleDishClick(index)}
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

      {showDishModal && (
        <DishModal
          dish={selectedDish}
          isOpen={showDishModal}
          onRequestClose={() => setShowDishModal(false)}
          fullDescription={selectedDish.fullDescription}
          onAddToBasket={(dish) => handleAddToBasket(dish)} // Pass the dish object
        />
      )}

      {/* Basket popup */}
      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          restaurantName={restaurant.name}
          restaurantLocation={restaurant.location}
          onDeleteItem={handleDeleteItem}
          onPaymentSuccess={handlePaymentSuccess}
          // Pass the handlePaymentSuccess function
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

export default RestaurantDetails;
