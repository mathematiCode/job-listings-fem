/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { FilterListContext } from "../context/FilterListProvider";
import { removeItemFromList } from "../utilities";

function JobLanguages({ languages }) {
  return (
    <ul className="language-container">
      {languages.map((language, index) => (
        <ListItem key={index} language={language} />
      ))}
    </ul>
  );
}

function ListItem({ language }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const { filterList, setFilterList } = useContext(FilterListContext);

  function updateFilterList() {
    let newFilterList = [...filterList];
    const filterIsAlreadyInList = newFilterList.find(
      (item) => item == language
    );
    if (filterIsAlreadyInList) {
      newFilterList = removeItemFromList(newFilterList, language);
    } else {
      newFilterList.push(language);
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
    const existingFilter = filterList.find((item) => item == language);
    if (existingFilter == language) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [filterList, language]);

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
        {language}
      </button>
    </li>
  );
}

export default JobLanguages;
