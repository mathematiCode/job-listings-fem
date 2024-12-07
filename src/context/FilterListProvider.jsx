/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { removeItemFromList } from "../utilities";

export const FilterListContext = createContext();

function FilterListProvider({ children }) {
  const [filterList, setFilterList] = useState([]);

  function updateFilterList(feature) {
    let newFilterList = [...filterList];
    const filterIsAlreadyInList = newFilterList.find((item) => item == feature);
    if (filterIsAlreadyInList) {
      newFilterList = removeItemFromList(newFilterList, feature);
    } else {
      newFilterList.push(feature);
    }
    setFilterList(newFilterList);
  }

  function removeFilter(filter) {
    const newList = removeItemFromList(filterList, filter);
    setFilterList(newList);
  }

  function resetFilterList() {
    setFilterList([]);
  }

  return (
    <FilterListContext.Provider
      value={{
        filterList,
        updateFilterList,
        removeFilter,
        resetFilterList,
      }}
    >
      {children}
    </FilterListContext.Provider>
  );
}

export default FilterListProvider;
