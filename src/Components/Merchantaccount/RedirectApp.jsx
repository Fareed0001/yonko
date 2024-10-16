// RedirectApp.js
import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectApp = () => {
  const navigate = useNavigate();

  const handleDownloadAppClick = () => {
    // Replace this with the actual download app logic or URL
    navigate("/");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Profile successfully created!</h2>
        <button onClick={handleDownloadAppClick}>
          Download App for Overview
        </button>
      </div>
    </div>
  );
};

export default RedirectApp;
