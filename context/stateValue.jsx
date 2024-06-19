import { useContext } from "react";
import { stateContext } from "./stateContext";

export const useStateValue = () => {
  const context = useContext(stateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
