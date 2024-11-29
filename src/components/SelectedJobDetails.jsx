/* eslint-disable react/prop-types */
import "../css/selectedJob.css";
import { X } from "lucide-react";
import { useContext } from "react";
import { CurrentJobSelecedContext } from "../context/CurrentJobSelectedProvider";
function SelectedJobDetails({ job }) {
  const { setCurrentJobSelected } = useContext(CurrentJobSelecedContext);
  function handleCloseDetails() {
    setCurrentJobSelected();
  }
  return (
    <div className="selected-job-container">
      <X className="close-job-details" onClick={handleCloseDetails} />
      <div className="main-info">
        <h2>{job.position}</h2>
        <div className="bottom-row">
          <p>{job.postedAt}</p>
          <span>·</span>
          <p>{job.contract}</p>
          <span>·</span>
          <p>{job.location}</p>
        </div>
        <p className="job-description"> {job.description} </p>
      </div>
    </div>
  );
}

export default SelectedJobDetails;
