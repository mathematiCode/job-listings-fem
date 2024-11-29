/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { FilterListContext } from "../context/FilterListProvider";
import { removeItemFromList } from "../utilities";

function JobFeatures({ features }) {
  return (
    <ul className="language-container">
      {features.map((feature, index) => (
        <ListItem key={index} feature={feature} />
      ))}
    </ul>
  );
}

function ListItem({ feature }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const { filterList, setFilterList } = useContext(FilterListContext);

  function updateFilterList() {
    let newFilterList = [...filterList];
    const filterIsAlreadyInList = newFilterList.find((item) => item == feature);
    if (filterIsAlreadyInList) {
      newFilterList = removeItemFromList(newFilterList, feature);
    } else {
      newFilterList.push(feature);
    }
    setFilterList(newFilterList);
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const existingFilter = filterList.find((item) => item == feature);
    if (existingFilter == feature) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [filterList, feature]);

  return (
    <li
      key={Math.random()}
      className="language"
      data-hovered={hovered}
      data-selected={selected}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={updateFilterList}
        className="no-styles"
        key={Math.random()}
      >
        {feature}
      </button>
    </li>
  );
}

export default JobFeatures;
