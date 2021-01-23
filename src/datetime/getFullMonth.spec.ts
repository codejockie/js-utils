import { getFullMonth } from "@/datetime/getFullMonth";

describe("getFullMonth", () => {
  test.each`
    month | monthName
    ${0}  | ${"January"}
    ${5}  | ${"June"}
    ${10} | ${"November"}
  `("should return the month name", ({ month, monthName }) => {
    expect(getFullMonth(month)).toEqual(monthName);
  });
});
