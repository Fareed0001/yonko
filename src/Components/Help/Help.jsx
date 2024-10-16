import React, { useState } from "react";
import image1 from "../../assets/customer.jpg";

const Help = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    window.location.href = event.target.value;
  };

  return (
    <div className="start">
      <div className="help">
        <div className="imgcon">
          <img src={image1} width="100%" />
        </div>

        <div className="selection">
          <form>
            <h2>Choose the help you need:</h2>

            <select onChange={handleOptionChange}>
              <option value="">-- Select an option --</option>
              <option value="/customer-help">Customer Help</option>
              <option value="/merchant-help">Merchant Help</option>
              <option value="/logistics-help">Logistics Help</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
