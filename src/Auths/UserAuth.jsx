// UserAuth.jsx
import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "../App";

const UserAuth = () => {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  );
};

export default UserAuth;
