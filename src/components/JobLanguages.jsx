/* eslint-disable react/prop-types */
import { useState } from "react";

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

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      className="language"
      data-hovered={hovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {language}
    </li>
  );
}

export default JobLanguages;
