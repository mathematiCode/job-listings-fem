import "../css/FilterContainer.css";
import CurrentFilters from "./CurrentFilters";
import { useContext } from "react";
import { FilterListContext } from "../context/FilterListProvider";
/* eslint-disable react/prop-types */

function FilterContainer() {
  const { filterList, setFilterList } = useContext(FilterListContext);
  return (
    <div className="search-box">
      <CurrentFilters filterList={filterList}></CurrentFilters>
      <button className="clear-button" onClick={() => setFilterList([])}>
        {" "}
        Clear
      </button>
    </div>
  );
}

export default FilterContainer;
