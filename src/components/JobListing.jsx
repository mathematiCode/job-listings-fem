/* eslint-disable react/prop-types */
import "../css/card.css";
import JobLanguages from "./JobLanguages";
import MainInfo from "./MainInfo";

// eslint-disable-next-line react/prop-types
function JobListing({ job }) {
  // eslint-disable-next-line react/prop-types
  return (
    <div className="job-container" key={job.id}>
      <img src={job.logo} alt={`${job.company} logo`} />
      <MainInfo job={job}></MainInfo>

      <JobLanguages languages={job.languages}></JobLanguages>
    </div>
  );
}

export default JobListing;
