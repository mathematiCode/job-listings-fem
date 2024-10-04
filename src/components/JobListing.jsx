/* eslint-disable react/prop-types */
import "../card.css";
import JobLanguages from "./JobLanguages";
import MainInfo from "./MainInfo";

function hi() {
  console.log("hi");
}
// eslint-disable-next-line react/prop-types
function JobListing({ job }) {
  console.log("job in JobListing is", job);
  hi();
  // eslint-disable-next-line react/prop-types
  return (
    <div className="job-container" key={job.id}>
      <MainInfo job={job}></MainInfo>
      <div className="language-container">
        <JobLanguages languages={job.languages}></JobLanguages>
      </div>
    </div>
  );
}

export default JobListing;
