import { fullMonth } from "@/datetime/full-month";

describe("fullMonth", () => {
  test.each`
    month | monthName
    ${0}  | ${"January"}
    ${5}  | ${"June"}
    ${10} | ${"November"}
  `("should return the month name", ({ month, monthName }) => {
    expect(fullMonth(month)).toEqual(monthName);
  });
});
