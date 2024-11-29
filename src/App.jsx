import "./css/index.css";
import JobListingsContainer from "./components/JobListingsContainer.jsx";
import SelectedJobDetails from "./components/SelectedJobDetails.jsx";
import FilterContainer from "./components/FilterContainer.jsx";
import FilterListProvider from "./context/FilterListProvider.jsx";
import CurrentJobsProvider from "./context/CurrentJobsProvider.jsx";

function App() {
  return (
    <FilterListProvider>
      <CurrentJobsProvider>
        <div className="app" key="all-jobs">
          <h1>Available Jobs</h1>
          <FilterContainer></FilterContainer>
          <div>
            <JobListingsContainer></JobListingsContainer>
            <SelectedJobDetails></SelectedJobDetails>
          </div>
        </div>
      </CurrentJobsProvider>
    </FilterListProvider>
  );
}

export default App;
