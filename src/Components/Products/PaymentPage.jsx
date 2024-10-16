import React, { useEffect, useState } from "react";
import { useFlutterwave } from "flutterwave-react-v3";
import { useLocation } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

export default function VendorPayment() {
  const location = useLocation();
  const { state } = location;
  const { vendorData } = state || {};
  const { storeName, contactName, totalPrice } = vendorData || {};
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { session } = useClerk();

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

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    setEmail("");
    setPhone("");
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Hi {contactName},</h2>
        <p>Store Name: {storeName}</p>
        {totalPrice !== undefined && (
          <p>Total Amount: ₦{totalPrice.toFixed(2)}</p>
        )}
        <button onClick={handleFlutterPayment}>Pay</button>
      </div>
    </div>
  );
}
