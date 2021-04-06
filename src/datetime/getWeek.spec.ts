import { getWeek } from "@/datetime/getWeek";

describe("getWeek", () => {
  test("should return the week", () => {
    expect(getWeek(new Date("2020-06-20T00:00:00.135Z"))).toEqual(25);
  });
});
