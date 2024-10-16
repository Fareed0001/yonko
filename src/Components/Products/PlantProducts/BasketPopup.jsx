import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const BasketPopup = ({
  basket,
  onClose,
  plantSupplyName,
  plantSupplyLocation,
  onDeleteItem,
  userName,
}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [localBasket, setLocalBasket] = useState(basket);
  const { openSignIn, session } = useClerk();
  const navigateTo = useNavigate();
  const { user, isLoaded: userLoaded } = useUser();

  const [defaultAddress, setDefaultAddress] = useState(null);
  const [temporaryAddress, setTemporaryAddress] = useState(null);
  const [useDefaultAddress, setUseDefaultAddress] = useState(false);

  useEffect(() => {
    const fetchDefaultAddress = async () => {
      if (session && session.userId) {
        const address = await getUserDefaultAddress(session.userId);
        setDefaultAddress(address);
      }
    };

    fetchDefaultAddress();
  }, [session]);

  useEffect(() => {
    setLocalBasket(basket);
  }, [basket]);

  useEffect(() => {
    updateTotalAmount();
  }, [localBasket]);

  const handleIncrement = (index) => {
    const updatedBasket = [...localBasket];
    updatedBasket[index].quantity++;
    setLocalBasket(updatedBasket);
  };

  const handleDecrement = (index) => {
    const updatedBasket = [...localBasket];
    if (updatedBasket[index].quantity > 1) {
      updatedBasket[index].quantity--;
      setLocalBasket(updatedBasket);
    }
  };

  const handleDelete = (index) => {
    const updatedBasket = localBasket.filter((_, i) => i !== index);
    onDeleteItem(updatedBasket);
  };

  const updateTotalAmount = () => {
    let total = 0;
    localBasket.forEach((item) => {
      total += Number(item.price) * Number(item.quantity);
    });
    console.log("Total Amount:", total); // Log total amount to console
    setTotalAmount(total);
  };

  const handleCheckout = async () => {
    if (!userLoaded || !user) {
      openSignIn();
    } else {
      // If there's a default address and the user has selected it, proceed to payment with the default address
      if (defaultAddress && useDefaultAddress) {
        const newOrder = new Order({
          userId: mongoose.Types.ObjectId(user.id),
          userName,
          plantSupplyName,
          plantSupplyLocation,
          totalAmount,
          basket: localBasket,
          shippingAddress: defaultAddress,
        });

        try {
          await newOrder.save();
          console.log("Order created successfully:", newOrder);
          navigateTo("/payment", {
            state: {
              userName: userName,
              plantSupplyName: plantSupplyName,
              plantSupplyLocation: plantSupplyLocation,
              totalAmount: totalAmount,
              basket: localBasket,
              shippingAddress: defaultAddress,
            },
          });
        } catch (error) {
          console.error("Error creating order:", error);
          alert(
            "An error occurred while creating the order. Please try again."
          );
        }
      } else {
        // Otherwise, ask the user to enter a temporary address
        const enteredTemporaryAddress = {
          address: temporaryAddress.address,
          postalCode: temporaryAddress.postalCode,
          state: temporaryAddress.state,
          city: temporaryAddress.city,
        };

        const newOrder = {
          userId: user.id,
          userName,
          plantSupplyName,
          plantSupplyLocation,
          totalAmount,
          basket: localBasket,
          shippingAddress: defaultAddress || enteredTemporaryAddress,
        };

        await axios.post("http://localhost:3002/api/orders", newOrder);

        navigateTo("/payment", {
          state: {
            userName: userName,
            plantSupplyName: plantSupplyName,
            plantSupplyLocation: plantSupplyLocation,
            totalAmount: totalAmount,
            basket: localBasket,
            shippingAddress: enteredTemporaryAddress,
          },
        });
      }
    }
  };

  return (
    <div className="basket-popup">
      <div className="close-icon" onClick={onClose}>
        <IoMdClose className="iconn" />
      </div>
      <div className="con">
        <div className="head">
          <h2>{plantSupplyName}</h2>
        </div>
        <div className="products">
          <ul>
            {localBasket.map((dish, index) => (
              <li key={index}>
                {dish.name} - ₦{dish.price}
                <div className="quantity">
                  <button onClick={() => handleDecrement(index)}>
                    <CiCircleMinus />
                  </button>
                  <input
                    type="number"
                    value={dish.quantity}
                    readOnly
                    className="quantity-input"
                  />
                  <button onClick={() => handleIncrement(index)}>
                    <CiCirclePlus />
                  </button>
                  <div className="deletecon">
                    <AiOutlineDelete
                      className="delete"
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="address-select">
          <div className="defaultadd">
            <input
              type="radio"
              id="default-address"
              name="address-option"
              value="default"
              checked={useDefaultAddress}
              onChange={() => setUseDefaultAddress(true)}
            />
            <label htmlFor="default-address">Use Default Address</label>
            {defaultAddress && (
              <div>
                <p>
                  {defaultAddress.address}, {defaultAddress.city},{" "}
                  {defaultAddress.state} - {defaultAddress.postalCode}
                </p>
              </div>
            )}
          </div>
          <div className="temporaryad">
            <div className="temp">
              <input
                type="radio"
                id="temporary-address"
                name="address-option"
                value="temporary"
                checked={!useDefaultAddress}
                onChange={() => setUseDefaultAddress(false)}
              />
              <label htmlFor="temporary-address">Enter Temporary Address</label>
            </div>
            {!useDefaultAddress && (
              <div className="temporaryadform">
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={temporaryAddress?.address || ""}
                    onChange={(e) =>
                      setTemporaryAddress({
                        ...temporaryAddress,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    value={temporaryAddress?.city || ""}
                    onChange={(e) =>
                      setTemporaryAddress({
                        ...temporaryAddress,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    value={temporaryAddress?.state || ""}
                    onChange={(e) =>
                      setTemporaryAddress({
                        ...temporaryAddress,
                        state: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={temporaryAddress?.postalCode || ""}
                    onChange={(e) =>
                      setTemporaryAddress({
                        ...temporaryAddress,
                        postalCode: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="checkout">
          <button onClick={handleCheckout}>
            Proceed to Checkout • ₦{totalAmount.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPopup;
