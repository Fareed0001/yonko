// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from "./Auths/UserAuth";
import VendorAuth from "./Auths/VendorAuth";
import "./main.css";
import Dashboard from "./Components/Merchantaccount/Dashboard";
import MerchantAccount from "./Components/Merchantaccount/Merchantaccount"; // Add this import
import Modal from "react-modal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

Modal.setAppElement("#root");

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/vendor/dashboard"
          element={<VendorAuth component={Dashboard} />}
        />
        <Route path="/*" element={<UserAuth />} />
        <Route
          path="/vendor"
          element={<VendorAuth component={MerchantAccount} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
