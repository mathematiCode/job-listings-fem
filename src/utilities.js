export function removeItemFromList(list, item) {
  if (list == null) return [];
  let newList = list.filter((listItem) => listItem != item);
  return newList;
}
