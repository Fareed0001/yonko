import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../../assets/data/drugsdata.json"; // Import pharmacy data
import { Parallax } from "react-parallax";
import Navbar from "../../Navbar/Navbar";
import { FaStar } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import BasketPopup from "./BasketPopup"; // Import BasketPopup component
import { IoMdArrowRoundBack } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiDiscount1 } from "react-icons/ci";
import HealthModal from "./HealthModal";

const HealthDetails = () => {
  const { pharmacyId } = useParams(); // Update to pharmacyId
  const { onlinePharmacies, localPharmacies } = data; // Destructure pharmacy data
  const allPharmacies = [...localPharmacies, ...onlinePharmacies]; // Combine online and local pharmacies
  const basketRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showHealthModal, setShowHealthModal] = useState(false);
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

  // Find the pharmacy with the matching pharmacyId
  const pharmacy = allPharmacies.find(
    (pharmacy) => pharmacy.id === parseInt(pharmacyId)
  );

  if (!pharmacy) {
    return <div>Pharmacy not found</div>;
  }

  const handleAddToBasket = (drugIndex) => {
    const selectedDrug = pharmacy.menu[drugIndex];

    if (selectedDrug) {
      setSelectedProduct(selectedDrug); // Update the selectedProduct state
      const existingItemIndex = basket.findIndex(
        (item) => item.name === selectedDrug.name
      );
      if (existingItemIndex !== -1) {
        const updatedBasket = [...basket];
        updatedBasket[existingItemIndex].quantity++;
        setBasket(updatedBasket);
      } else {
        setBasket([...basket, { ...selectedDrug, quantity: 1 }]);
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
    navigate(`/pharmacies/${pharmacyId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowHealthModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={pharmacy.image} // Update to use pharmacy image
          className="pa1"
        ></Parallax>

        <div className="back">
          <a href="/pharmacies/*">
            {" "}
            {/* Update the link to pharmacies */}
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <div className="details">
          <div className="left">
            <h2>{pharmacy.name}</h2>
            <p>{pharmacy.location}</p>
            <p>{pharmacy.deliveryTime}</p>
            <p className="cat">{pharmacy.category}</p>
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
              <FaStar className="icon" /> {pharmacy.rating}
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
            {pharmacy.menu.map((item, index) => (
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

      {showHealthModal && (
        <HealthModal
          product={selectedProduct}
          isOpen={showHealthModal}
          onRequestClose={() => setShowHealthModal(false)}
          fullDescription={selectedProduct.fullDescription}
          onAddToBasket={() =>
            handleAddToBasket(pharmacy.menu.indexOf(selectedProduct))
          }
        />
      )}

      {/* Basket popup */}
      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          pharmacyName={pharmacy.name}
          onDeleteItem={handleDeleteItem}
          onPaymentSuccess={handlePaymentSuccess}
          // Pass the onDeleteItem function
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

export default HealthDetails;
