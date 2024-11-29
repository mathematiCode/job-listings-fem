export function removeItemFromList(list, item) {
  if (list == null) return [];
  let newList = list.filter((listItem) => listItem != item);
  return newList;
}

import data from "../data.json";
export function filterJobs(filterList) {
  let newJobList = [...data];
  if (filterList.length == 0) {
    newJobList.forEach((job) => (job.show = true));
    return newJobList;
  }

  for (let i = 0; i < data.length; i++) {
    newJobList[i].show = false;
    data[i].features.forEach((feature) => {
      filterList.forEach((listItem) => {
        if (feature == listItem) {
          newJobList[i].show = true;
        }
      });
    });
  }

  return newJobList;
}
