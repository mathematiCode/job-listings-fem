/* eslint-disable react-hooks/exhaustive-deps */
import { FilterListContext } from "../context/FilterListProvider.jsx";
import { CurrentJobSelecedContext } from "../context/CurrentJobSelectedProvider.jsx";
import { useContext } from "react";
import { filterJobs } from "../utilities.js";
import JobListing from "./JobListing.jsx";
import SelectedJobDetails from "./SelectedJobDetails.jsx";
import data from "../../data.json";
import { Drawer } from "@mui/material";

data.forEach((item) => {
  item.features = [item.role, item.level, ...item.languages, ...item.tools];
});
let currentJobList = [...data];
currentJobList.forEach((item) => (item.show = true));

function JobListingsContainer() {
  const { filterList } = useContext(FilterListContext);
  const { currentJobSelected, setCurrentJobSelected } = useContext(
    CurrentJobSelecedContext
  );

  let currentJobs = filterJobs(filterList);
  let open = currentJobSelected != undefined;

  let drawerWidth = 300;
  if (window.screen.width < 500) {
    drawerWidth = window.screen.width;
  }

  return (
    <>
      {currentJobs.map((job) => {
        if (job.show == true) {
          return (
            <JobListing key={job.id} job={job}>
              {" "}
            </JobListing>
          );
        }
      })}
      {open && (
        <Drawer
          open={open}
          anchor="right"
          variant="persistent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              backgroundColor: "#242424;",
              color: "white",
              width: drawerWidth,
              boxSizing: "border-box",
              border: "2px solid rgb(160, 200, 250)",
              borderRight: "0px solid",
              borderRadius: "10px",
              padding: "20px",
            },
          }}
          onClose={() => setCurrentJobSelected()}
        >
          <SelectedJobDetails
            job={currentJobSelected}
            setOpen={open}
          ></SelectedJobDetails>
        </Drawer>
      )}
    </>
  );
}

export default JobListingsContainer;
