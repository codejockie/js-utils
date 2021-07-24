import { weekDay } from "@/datetime/week-day";

describe("weekDay", () => {
  test.each`
    week | weekName
    ${1} | ${"Monday"}
    ${5} | ${"Friday"}
    ${3} | ${"Wednesday"}
  `("should return the week day name", ({ week, weekName }) => {
    expect(weekDay(week)).toEqual(weekName);
  });
});
