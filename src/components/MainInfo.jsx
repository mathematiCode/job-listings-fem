/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function MainInfo({ job }) {
  console.log("job is", job);
  return (
    <div className="main-info">
      <h3>{job.position}</h3>
    </div>
  );
}

export default MainInfo;
