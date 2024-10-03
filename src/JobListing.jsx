/* eslint-disable react/prop-types */
import JobLanguages from "./JobLanguages";

// eslint-disable-next-line react/prop-types
function JobListing({ job }) {
  console.log("job is", job);
  // eslint-disable-next-line react/prop-types
  console.log("job.languages is", job.languages);
  return (
    <div>
      <h1>Hello</h1>
      <JobLanguages languages={job.languages}></JobLanguages>
    </div>
  );
}

export default JobListing;
