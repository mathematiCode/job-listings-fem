/* eslint-disable react/prop-types */
import "../css/selectedJob.css";
import { X } from "lucide-react";
import { useContext } from "react";
import { CurrentJobSelecedContext } from "../context/CurrentJobSelectedProvider";

function SelectedJobDetails({ job, setOpen }) {
  const { setCurrentJobSelected } = useContext(CurrentJobSelecedContext);
  function handleCloseDetails() {
    setCurrentJobSelected();
    setOpen(false);
  }
  return (
    <>
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
      </div>
      <p className="job-description"> {job.description} </p>
      <button className="scale-button">
        {" "}
        <span className="scale-text">Apply Now</span>
        <span className="scale-bg"></span>
      </button>
    </>
  );
}

export default SelectedJobDetails;
