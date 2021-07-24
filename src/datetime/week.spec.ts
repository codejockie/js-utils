import { week } from "@/datetime/week";

describe("week", () => {
  test("should return the week", () => {
    expect(week(new Date("2020-06-20T00:00:00.135Z"))).toEqual(25);
  });
});
