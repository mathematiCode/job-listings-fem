import "../css/SearchBox.css";
import CurrentFilters from "./CurrentFilters";
/* eslint-disable react/prop-types */

function SearchBox({ filterList }) {
  return (
    <div className="search-box">
      <CurrentFilters filterList={filterList}></CurrentFilters>
      <button> Clear</button>
    </div>
  );
}

export default SearchBox;
