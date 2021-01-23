import { flat } from "@/arrays/flat";

describe("flat", () => {
  test("should flatten a two dimensional array", () => {
    expect(flat([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test("should flatten just one level deep", () => {
    expect(flat([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
  });
});
