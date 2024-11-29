import { FilterListContext } from "../context/FilterListProvider.jsx";
import { CurrentJobsContext } from "../context/CurrentJobsProvider.jsx";
import { useEffect, useContext } from "react";
import { filterJobs } from "../utilities.js";
import JobListing from "./JobListing.jsx";
import data from "../../data.json";

data.forEach((item) => {
  item.features = [item.role, item.level, ...item.languages, ...item.tools];
});
let currentJobList = [...data];
currentJobList.forEach((item) => (item.show = true));

function JobListingsContainer() {
  const { filterList } = useContext(FilterListContext);
  const { currentJobs, setCurrentJobs } = useContext(CurrentJobsContext);

  useEffect(() => {
    setCurrentJobs(filterJobs(filterList));
  }, [filterList, setCurrentJobs]);

  return currentJobs.map((job) => {
    if (job.show == true) {
      return (
        <JobListing key={job.id} job={job}>
          {" "}
        </JobListing>
      );
    }
  });
}

export default JobListingsContainer;
