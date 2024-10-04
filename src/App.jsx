import "./card.css";
import JobListing from "./components/JobListing";
import data from "../data.json";

// let jobData = JSON.parse(data);
let jobData = data;

function App() {
  return (
    <div className="app" key="all-jobs">
      <h1>Available Jobs</h1>
      {jobData.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;
