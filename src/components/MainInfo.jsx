/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function MainInfo({ job }) {
  console.log("job is", job);
  return (
    <div className="main-info">
      <div className="top-row">
        <h5 className="company">{job.company}</h5>
        {job.new === true && <span className="tag">New!</span>}
        {job.featured === true && <span className="tag">Featured</span>}
      </div>
      <h2>{job.position}</h2>
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
