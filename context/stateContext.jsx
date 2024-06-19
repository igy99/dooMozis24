import * as React from "react";
import { createContext, useState } from "react";

export const stateContext = createContext();

export const StateProvider = ({ children }) => {
  const [popUp, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popUp);
  };

  return (
    <stateContext.Provider value={{ handlePopup }}>
      {children}
    </stateContext.Provider>
  );
};
