import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import plantData from "../../../assets/data/plantdata.json";
import { Parallax } from "react-parallax";
import Navbar from "../../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import BasketPopup from "./BasketPopup";
import { IoMdArrowRoundBack } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiDiscount1 } from "react-icons/ci";
import PlantModal from "./PlantModal";

const PlantDetails = () => {
  const { plantSupplyId } = useParams();
  const { onlinePlants, localPlants } = plantData;
  const allPlants = [...localPlants, ...onlinePlants];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPlantModal, setShowPlantModal] = useState(false);
  const [basket, setBasket] = useState([]);
  const [showBasketPopup, setShowBasketPopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigate = useNavigate();
  const basketRef = useRef(null);

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

  const plantSupply = allPlants.find(
    (plantSupply) => plantSupply.id === parseInt(plantSupplyId)
  );

  if (!plantSupply) {
    return <div>Plant supply not found</div>;
  }

  const handleAddToBasket = (item) => {
    const existingItemIndex = basket.findIndex(
      (basketItem) => basketItem.name === item.name
    );
    if (existingItemIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket[existingItemIndex].quantity++;
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
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

  const handlePaymentSuccess = () => {
    // Redirect back to the restaurant details page after payment
    navigate(`/plants/${plantSupplyId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPlantModal(true);
  };

  console.log("plantsupplyId:", plantSupplyId);
  console.log("allPlants.length:", allPlants.length);

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={plantSupply.image}
          className="pa1"
        ></Parallax>

        <div className="back">
          <a href="/plants/*">
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <div className="details">
          <div className="left">
            <h2>{plantSupply.name}</h2>
            <p>{plantSupply.location}</p>
            <p>{plantSupply.deliveryTime}</p>
            <p className="cat">{plantSupply.category}</p>
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
              <FaStar className="icon" /> {plantSupply.rating}
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
            {plantSupply.menu.map((item, index) => (
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

      {showPlantModal && (
        <PlantModal
          product={selectedProduct}
          isOpen={showPlantModal}
          onRequestClose={() => setShowPlantModal(false)}
          fullDescription={selectedProduct.fullDescription}
          onAddToBasket={() => handleAddToBasket(selectedProduct)}
        />
      )}

      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          onDeleteItem={handleDeleteItem}
          plantSupplyName={plantSupply.name}
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

export default PlantDetails;
