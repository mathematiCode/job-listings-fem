/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FilterListContext = createContext();

function FilterListProvider({ children }) {
  const [filterList, setFilterList] = useState([]);
  return (
    <FilterListContext.Provider value={{ filterList, setFilterList }}>
      {children}
    </FilterListContext.Provider>
  );
}

export default FilterListProvider;
