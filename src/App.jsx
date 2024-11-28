import "./css/index.css";
import JobListing from "./components/JobListing";
import SearchBox from "./components/SearchBox";
import data from "../data.json";
import FilterListProvider from "./context/FilterListProvider.jsx";

// let jobData = JSON.parse(data);
let jobData = data;

function App() {
  // const [filterList, setFilterList] = React.useState([]);
  console.log("hi");
  return (
    <FilterListProvider>
      <div className="app" key="all-jobs">
        <h1>Available Jobs</h1>
        <SearchBox></SearchBox>
        {jobData.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </div>
    </FilterListProvider>
  );
}

export default App;
