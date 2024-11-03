/* eslint-disable react/prop-types */

function CurrentFilters({ filterList }) {
  return (
    <div className="current-filters">
      {filterList.map((filter) => {
        return <p key={filter}> {filter} </p>;
      })}
    </div>
  );
}

export default CurrentFilters;
