import "./css/index.css";
import JobListingsContainer from "./components/JobListingsContainer.jsx";
import SearchBox from "./components/SearchBox";
import FilterListProvider from "./context/FilterListProvider.jsx";
import CurrentJobsProvider from "./context/CurrentJobsProvider.jsx";

// let jobData = JSON.parse(data);
// let jobData = data;

function App() {
  return (
    <FilterListProvider>
      <CurrentJobsProvider>
        <div className="app" key="all-jobs">
          <h1>Available Jobs</h1>
          <SearchBox></SearchBox>
          <JobListingsContainer></JobListingsContainer>
        </div>
      </CurrentJobsProvider>
    </FilterListProvider>
  );
}

export default App;
