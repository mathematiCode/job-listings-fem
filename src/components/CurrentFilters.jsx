/* eslint-disable react/prop-types */

function CurrentFilters({ filterList }) {
  return (
    <div className="current-filters">
      {filterList.map((filter) => {
        return (
          <div key={`${filter} container`} className="filter">
            <p key={filter}> {filter} </p>
            <button className="remove-filter-button" key={`remove ${filter}`}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CurrentFilters;
