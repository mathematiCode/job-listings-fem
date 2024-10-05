function hoverColor() {
  console.log("Ready to change color");
}

function JobLanguages({ languages }) {
  console.log("languages is", languages);
  return languages.map((language, index) => (
    <li className="language" key={index} onMouseEnter={hoverColor}>
      {language}
    </li>
  ));
}

export default JobLanguages;
