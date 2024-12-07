import { describe, it, expect } from "vitest";

import { removeItemFromList, filterJobs } from "./utilities";

describe("removes an item from an array", () => {
  it("remove the provided item from the array", () => {
    expect(removeItemFromList([1, 2, 3, 5, 8], 3)).toEqual([1, 2, 5, 8]);
  });
  it("removes nothing if the item is already not in array", () => {
    expect(removeItemFromList([1, 2, 3, 5, 8], "hi")).toEqual([1, 2, 3, 5, 8]);
  });
});

describe.skip("filterJobs", () => {
  it("returns an array where if the job contains at least one feature, show will equal true and if not then show will equal false.", () => {
    const result1 = filterJobs(["JavaScript"]);
    expect(result1).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          show: true,
        }),
      ])
    );
  });
  it("returns the full array with show:true for each job when empty array is passed", () => {
    const result2 = filterJobs([]);
    expect(result2).toHaveLength(10);
    expect(result2).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          show: true,
        }),
      ])
    );
  });
});
