import "../css/FilterContainer.css";
import CurrentFilters from "./CurrentFilters";
import { useContext } from "react";
import { FilterListContext } from "../context/FilterListProvider";
/* eslint-disable react/prop-types */

function FilterContainer() {
  const { filterList, setFilterList } = useContext(FilterListContext);
  if (filterList.length > 0) {
    return (
      <div className="filter-container">
        <CurrentFilters filterList={filterList}></CurrentFilters>
        <button className="clear-button" onClick={() => setFilterList([])}>
          {" "}
          Clear
        </button>
      </div>
    );
  } else return;
}

export default FilterContainer;
