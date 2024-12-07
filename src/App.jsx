import "./css/index.css";
import JobListingsContainer from "./components/JobListingsContainer.jsx";
import FilterContainer from "./components/FilterContainer.jsx";
import FilterListProvider from "./context/FilterListProvider.jsx";
import CurrentJobSelectedProvider from "./context/CurrentJobSelectedProvider.jsx";

function App() {
  return (
    <FilterListProvider>
      <CurrentJobSelectedProvider>
        <div className="app" key="all-jobs">
          <h1>Available Jobs</h1>
          <div className="main">
            <FilterContainer></FilterContainer>
            <JobListingsContainer></JobListingsContainer>
          </div>
        </div>
      </CurrentJobSelectedProvider>
    </FilterListProvider>
  );
}

export default App;
