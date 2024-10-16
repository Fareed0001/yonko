// VendorAuth.jsx
import React, { useEffect } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const VENDOR_PUBLISHABLE_KEY = import.meta.env
  .VITE_CLERK_VENDOR_PUBLISHABLE_KEY;

const VendorAuth = ({ component: Component }) => {
  const navigate = useNavigate();

  if (!VENDOR_PUBLISHABLE_KEY) {
    throw new Error("Missing Vendor Publishable Key");
  }

  const handleSuccessfulAuth = () => {
    navigate("/vendor/dashboard", { replace: true });
  };

  return (
    <ClerkProvider
      publishableKey={VENDOR_PUBLISHABLE_KEY}
      onSuccess={handleSuccessfulAuth}
      navigate={(to) => {
        if (to === "/") {
          // Check for potential Clerk redirection issue
          handleSuccessfulAuth(); //Redirect to vendor dashboard manually
        } else {
          navigate(to);
        }
      }}
    >
      {Component && <Component />}
    </ClerkProvider>
  );
};

export default VendorAuth;
