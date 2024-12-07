/* eslint-disable react/prop-types */
import { FilterListContext } from "../context/FilterListProvider";
import { useContext } from "react";
import { X } from "lucide-react";

function CurrentFilters() {
  const { filterList, removeFilter } = useContext(FilterListContext);

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
              <X />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CurrentFilters;
