import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../assets/data/beautydata.json";
import { Parallax } from "react-parallax";
import Navbar from "../../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd, IoMdArrowRoundBack } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import BeautyModal from "./BeautyModal";
import BasketPopup from "./BasketPopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BeautyDetails = () => {
  const { spaId } = useParams();
  const { onlineSpas, localSpas } = data;
  const allSpas = [...localSpas, ...onlineSpas];
  const basketRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBeautyModal, setShowBeautyModal] = useState(false);
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

  const spa = allSpas.find((spa) => spa.id === parseInt(spaId));

  if (!spa) {
    return <div>Spa not found</div>;
  }

  const handleAddToBasket = (itemIndex) => {
    const selectedItem = spa.menu[itemIndex];

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
    navigate(`/beautyproducts${spaId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowBeautyModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={spa.image}
          className="pa1"
        ></Parallax>

        <div className="back">
          <a href="/beautyproducts/*">
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <div className="details">
          <div className="left">
            <h2>{spa.name}</h2>
            <p>{spa.location}</p>
            <p>{spa.deliveryTime}</p>
            <p className="cat">{spa.category}</p>
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
              <FaStar className="icon" /> {spa.rating}
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
            {spa.menu.map((item, index) => (
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

      {showBeautyModal && (
        <BeautyModal
          product={selectedProduct}
          isOpen={showBeautyModal}
          onRequestClose={() => setShowBeautyModal(false)}
          fullDescription={selectedProduct.fullDescription}
          onAddToBasket={() =>
            handleAddToBasket(spa.menu.indexOf(selectedProduct))
          }
        />
      )}

      {/* Basket popup */}
      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          spaName={spa.name}
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

export default BeautyDetails;
