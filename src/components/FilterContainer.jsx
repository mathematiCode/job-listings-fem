import "../css/filterContainer.css";
import { motion } from "motion/react";
import CurrentFilters from "./CurrentFilters";
import { useContext } from "react";
import { FilterListContext } from "../context/FilterListProvider";
/* eslint-disable react/prop-types */

function FilterContainer() {
  const { filterList, resetFilterList } = useContext(FilterListContext);
  if (filterList.length > 0) {
    return (
      <motion.div layout={true} className="filter-container">
        <CurrentFilters filterList={filterList}></CurrentFilters>
        <button className="clear-button" onClick={resetFilterList}>
          {" "}
          Clear
        </button>
      </motion.div>
    );
  } else return;
}

export default FilterContainer;
