/* eslint-disable react/prop-types */

import { CurrentJobSelecedContext } from "../context/CurrentJobSelectedProvider";
import { useContext } from "react";
function MainInfo({ job }) {
  const { setCurrentJobSelected } = useContext(CurrentJobSelecedContext);
  function handleJobSelection() {
    setCurrentJobSelected(job);
  }

  return (
    <div className="main-info">
      <div className="top-row">
        <h5 className="company">{job.company}</h5>
        {job.new === true && <span className="tag">New!</span>}
        {job.featured === true && <span className="tag">Featured</span>}
      </div>
      <h2 onClick={handleJobSelection}>{job.position}</h2>
      <div className="bottom-row">
        <p>{job.postedAt}</p>
        <span>·</span>
        <p>{job.contract}</p>
        <span>·</span>
        <p>{job.location}</p>
      </div>
    </div>
  );
}

export default MainInfo;
