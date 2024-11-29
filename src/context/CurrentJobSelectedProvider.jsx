/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CurrentJobSelecedContext = createContext();

function CurrentJobSelectedProvider({ children }) {
  const [currentJobSelected, setCurrentJobSelected] = useState();

  return (
    <CurrentJobSelecedContext.Provider
      value={{ currentJobSelected, setCurrentJobSelected }}
    >
      {children}
    </CurrentJobSelecedContext.Provider>
  );
}

export default CurrentJobSelectedProvider;
