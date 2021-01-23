import { getWeekDay } from "@/datetime/getWeekDay";

describe("getWeekDay", () => {
  test.each`
    week | weekName
    ${1} | ${"Monday"}
    ${5} | ${"Friday"}
    ${3} | ${"Wednesday"}
  `("should return the week day name", ({ week, weekName }) => {
    expect(getWeekDay(week)).toEqual(weekName);
  });
});
