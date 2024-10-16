import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Looking for?"
        value={query}
        onChange={handleChange}
      />

      <div className="button">
        <a href="">Search</a>
      </div>
    </div>
  );
};

export default Search;
