import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import petSuppliesData from "../../../assets/data/petdata.json";
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
import PetModal from "./PetModal";

const PetDetails = () => {
  const { petSupplyId } = useParams();
  const { onlinePetSupplies, localPetSupplies } = petSuppliesData;
  const allPetSupplies = [...localPetSupplies, ...onlinePetSupplies];
  const basketRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPetModal, setShowPetModal] = useState(false);
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

  // Find the pet supply with the matching petSupplyId
  const petSupply = allPetSupplies.find(
    (petSupply) => petSupply.id === parseInt(petSupplyId)
  );

  if (!petSupply) {
    return <div>Pet supply not found</div>;
  }

  const handleAddToBasket = (itemIndex) => {
    const selectedItem = petSupply.menu[itemIndex];

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
    navigate(`/beautyproducts${petSupplyId}`);
    // Show the order confirmation popup
    setShowOrderConfirmation(true);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPetModal(true);
  };

  return (
    <div className="detailspage">
      <Navbar />
      <div>
        <Parallax
          strength={400}
          blur={{ min: 0.5, max: 0.5 }}
          bgImage={petSupply.image}
          className="pa1"
        ></Parallax>

        <div className="back">
          <a href="/pets/*">
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <div className="details">
          <div className="left">
            <h2>{petSupply.name}</h2>
            <p>{petSupply.location}</p>
            <p>{petSupply.deliveryTime}</p>
            <p className="cat">{petSupply.category}</p>
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
              <FaStar className="icon" /> {petSupply.rating}
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
            {petSupply.menu.map((item, index) => (
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

      {showPetModal && (
        <PetModal
          product={selectedProduct}
          isOpen={showPetModal}
          onRequestClose={() => setShowPetModal(false)}
          fullDescription={selectedProduct.fullDescription}
          onAddToBasket={() =>
            handleAddToBasket(petSupply.menu.indexOf(selectedProduct))
          }
        />
      )}

      {/* Basket popup */}
      {showBasketPopup && (
        <BasketPopup
          basket={basket}
          onClose={toggleBasketPopup}
          petSupplyName={petSupply.name}
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

export default PetDetails;
