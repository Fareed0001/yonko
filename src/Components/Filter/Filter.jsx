import React, { useState } from "react";

const Filter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  return (
    <div className="searchin">
      <input
        type="text"
        placeholder="Store name, Product...."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
