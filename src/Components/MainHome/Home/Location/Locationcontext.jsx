import React, { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{ selectedLocation, handleSelectLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
