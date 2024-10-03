import "./App.css";
import JobListing from "./JobListing";

function App() {
  const job = {
    languages: ["English", "Spanish"],
  };
  return (
    <>
      <h1>Good Evening</h1>
      <JobListing job={job} />
    </>
  );
}

export default App;
