/* eslint-disable react/prop-types */
import { FilterListContext } from "../context/FilterListProvider";
import { useContext } from "react";
import { removeItemFromList } from "../utilities";

function CurrentFilters() {
  const { filterList, setFilterList } = useContext(FilterListContext);

  function removeFilter(filter) {
    const newList = removeItemFromList(filterList, filter);
    setFilterList(newList);
  }

  return (
    <div className="current-filters">
      {filterList.map((filter) => {
        return (
          <div key={`${filter} container`} className="filter">
            <p key={filter}> {filter} </p>
            <button
              className="remove-filter-button"
              key={`remove ${filter}`}
              onClick={() => removeFilter(filter)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CurrentFilters;
