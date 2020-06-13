import { flatDeep } from "@/arrays/flatDeep"

describe("flatDeep", () => {
  test("should flatten a two dimensional array", () => {
    expect(flatDeep([1, 2, [3, 4]])).toEqual([1, 2, 3, 4])
  })

  test("should flatten two levels deep", () => {
    expect(flatDeep([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6])
  })

  test("should flatten one level deep when depth is omitted", () => {
    expect(flatDeep([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]])
  })

  test("should flatten to (∞) infinity level deep", () => {
    expect(
      flatDeep([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
