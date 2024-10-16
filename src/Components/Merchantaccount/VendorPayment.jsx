import React, { useEffect, useState } from "react";
import { useFlutterwave } from "flutterwave-react-v3";
import { useLocation } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://yonkovendor.herokuapp.com"
    : "http://localhost:3001";

export default function VendorPayment() {
  const location = useLocation();
  const { state } = location;
  const { vendorData } = state || {};
  const { storeName, contactName, totalPrice } = vendorData || {};
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { session } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if (session && session.user) {
      console.log("Session:", session);
      console.log("User:", session.user);
      if (session.user.email) {
        setEmail(session.user.email);
      }
    }
  }, [session]);

  const config = {
    public_key: "FLWPUBK_TEST-3d81a4d3d53b25731860142edd5d282b-X",
    tx_ref: Date.now(),
    amount: totalPrice || 0,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email || "example@example.com",
      phone_number: phone,
      name: contactName,
    },
    customizations: {
      title: "My Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePay = useFlutterwave(config);

  const handlePayment = (data) => {
    setPaymentStatus(data);
  };

  const handleCheckout = () => {
    if (session && session.user) {
      // Add this check
      handlePay({
        callback: (response) => {
          handlePayment(response);
          if (response.status === "successful") {
            const updatedVendorData = {
              ...vendorData,
              email: session.user.email,
              accountBalance: 0.0,
              totalProducts: 0,
              totalEarnings: 0.0,
              sales: [], // Add this line to initialize the sales array
              sessionId: session.id, // Add this line to include the session ID
            };

            axios
              .post(`${BASE_URL}/api/vendors`, updatedVendorData)
              .then(() => {
                console.log("Vendor saved successfully after payment");
                navigate("/redirect-app");
              })
              .catch((error) => {
                console.error("Error saving vendor after payment:", error);
              });
          }
        },
        onClose: () => console.log("Payment modal closed"),
      });
    } else {
      console.log("User is not logged in or session data is not available");
    }
  };

  useEffect(() => {
    setEmail("");
    setPhone("");
  }, []);

  useEffect(() => {
    if (vendorData && vendorData.uuid) {
      axios
        .get(`${BASE_URL}/api/vendors/${vendorData.uuid}/dashboard`)
        .then((response) => {
          console.log("Vendor dashboard data:", response.data);
          // Update your component state with the dashboard data
        })
        .catch((error) => {
          console.error("Error fetching vendor dashboard:", error);
        });
    }
  }, [vendorData]);

  return (
    <div className="App">
      <div className="container">
        <h2>Hi {contactName},</h2>
        <p>Store Name: {storeName}</p>
        {totalPrice !== undefined && (
          <p>Total Amount: ₦{totalPrice.toFixed(2)}</p>
        )}
        <button onClick={handleCheckout}>Pay</button>
      </div>
    </div>
  );
}
