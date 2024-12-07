/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { FilterListContext } from "../context/FilterListProvider";

function JobFeatures({ features }) {
  return (
    <ul className="feature-container">
      {features.map((feature, index) => (
        <ListItem key={index} feature={feature} />
      ))}
    </ul>
  );
}

function ListItem({ feature }) {
  const [selected, setSelected] = useState(false);
  const { filterList, updateFilterList } = useContext(FilterListContext);

  useEffect(() => {
    const existingFilter = filterList.find((item) => item == feature);
    if (existingFilter == feature) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [filterList, feature]);

  return (
    <li key={Math.random()} className="feature" data-selected={selected}>
      <button
        onClick={() => updateFilterList(feature)}
        className="no-styles"
        key={Math.random()}
      >
        {feature}
      </button>
    </li>
  );
}

export default JobFeatures;
