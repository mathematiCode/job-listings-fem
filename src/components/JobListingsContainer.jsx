import { FilterListContext } from "../context/FilterListProvider.jsx";
import { CurrentJobsContext } from "../context/CurrentJobsProvider.jsx";
import { CurrentJobSelecedContext } from "../context/CurrentJobSelectedProvider.jsx";
import { useEffect, useContext } from "react";
import { filterJobs } from "../utilities.js";
import JobListing from "./JobListing.jsx";
import SelectedJobDetails from "./SelectedJobDetails.jsx";
import data from "../../data.json";

data.forEach((item) => {
  item.features = [item.role, item.level, ...item.languages, ...item.tools];
});
let currentJobList = [...data];
currentJobList.forEach((item) => (item.show = true));

function JobListingsContainer() {
  const { filterList } = useContext(FilterListContext);
  const { currentJobs, setCurrentJobs } = useContext(CurrentJobsContext);
  const { currentJobSelected } = useContext(CurrentJobSelecedContext);

  useEffect(() => {
    setCurrentJobs(filterJobs(filterList));
  }, [filterList, setCurrentJobs]);

  return (
    <>
      <div>
        {currentJobs.map((job) => {
          if (job.show == true) {
            return (
              <JobListing key={job.id} job={job}>
                {" "}
              </JobListing>
            );
          }
        })}
      </div>
      {currentJobSelected != undefined && (
        <SelectedJobDetails job={currentJobSelected}></SelectedJobDetails>
      )}
    </>
  );
}

export default JobListingsContainer;
