/* eslint-disable react/prop-types */
import "../card.css";
import JobLanguages from "./JobLanguages";
import MainInfo from "./MainInfo";

// eslint-disable-next-line react/prop-types
function JobListing({ job }) {
  // eslint-disable-next-line react/prop-types
  let companyWithDashes = job.company.replace(/ /g, "-");
  companyWithDashes = companyWithDashes.replace(".", "");
  return (
    <div className="job-container" key={job.id}>
      <img src={`../public/images/${companyWithDashes}.svg`} />
      <MainInfo job={job}></MainInfo>
      <ul className="language-container">
        <JobLanguages languages={job.languages}></JobLanguages>
      </ul>
    </div>
  );
}

export default JobListing;
