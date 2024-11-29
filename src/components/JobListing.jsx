/* eslint-disable react/prop-types */
import "../css/card.css";
import { motion } from "motion/react";
import JobFeatures from "./JobFeatures";
import MainInfo from "./MainInfo";

// eslint-disable-next-line react/prop-types
function JobListing({ job }) {
  // eslint-disable-next-line react/prop-types
  return (
    <motion.div layout={true} className="job-container" key={job.id}>
      <img src={job.logo} alt={`${job.company} logo`} />
      <MainInfo job={job}></MainInfo>

      <JobFeatures features={job.features}></JobFeatures>
    </motion.div>
  );
}

export default JobListing;
