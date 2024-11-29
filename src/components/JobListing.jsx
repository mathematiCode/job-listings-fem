/* eslint-disable react/prop-types */
import "../css/card.css";
import JobFeatures from "./JobFeatures";
import MainInfo from "./MainInfo";

// eslint-disable-next-line react/prop-types
function JobListing({ job }) {
  // eslint-disable-next-line react/prop-types
  return (
    <div className="job-container" key={job.id}>
      <img src={job.logo} alt={`${job.company} logo`} />
      <MainInfo job={job}></MainInfo>

      <JobFeatures features={job.features}></JobFeatures>
    </div>
  );
}

export default JobListing;
