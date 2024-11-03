import "./css/index.css";
import React from "react";
import JobListing from "./components/JobListing";
import SearchBox from "./components/SearchBox";
import data from "../data.json";

// let jobData = JSON.parse(data);
let jobData = data;

function App() {
  const [filterList, setFilterList] = React.useState(["html", "css"]);
  return (
    <div className="app" key="all-jobs">
      <h1>Available Jobs</h1>
      <SearchBox filterList={filterList}></SearchBox>
      {jobData.map((job) => (
        <JobListing key={job.id} job={job} setFilterList={setFilterList} />
      ))}
    </div>
  );
}

export default App;
