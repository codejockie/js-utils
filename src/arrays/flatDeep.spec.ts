import { flatDeep } from "@/arrays/flatDeep";

describe("flatDeep", () => {
  test("should flatten two dimensional arrays", () => {
    expect(flatDeep(["a", "b", ["c", "d"]])).toEqual(["a", "b", "c", "d"]);
  });

  test("should flatten two levels deep", () => {
    expect(flatDeep([10, 20, [30, 4, [5, 6]]], 2)).toEqual([10, 20, 30, 4, 5, 6]);
  });

  test("should flatten one level deep when depth is omitted", () => {
    expect(flatDeep([1, 2, [30, 4, [50, 60]]])).toEqual([1, 2, 30, 4, [50, 60]]);
  });

  test("should flatten to (∞) infinity level deep", () => {
    expect(
      flatDeep([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
