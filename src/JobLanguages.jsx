function JobLanguages({ languages }) {
  console.log("languages is", languages);
  return languages.map((language, index) => <div key={index}>{language}</div>);
}

export default JobLanguages;
