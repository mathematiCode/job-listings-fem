/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import data from "../../data.json";

export const CurrentJobsContext = createContext();

function CurrentJobsProvider({ children }) {
  const [currentJobs, setCurrentJobs] = useState([...data]);
  return (
    <CurrentJobsContext.Provider value={{ currentJobs, setCurrentJobs }}>
      {children}
    </CurrentJobsContext.Provider>
  );
}

export default CurrentJobsProvider;
