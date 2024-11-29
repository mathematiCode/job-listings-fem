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
    data[i].languages.forEach((language) => {
      filterList.forEach((listItem) => {
        if (language == listItem) {
          newJobList[i].show = true;
        }
      });
    });
  }
  console.log("new list is", newJobList);

  return newJobList;
}
