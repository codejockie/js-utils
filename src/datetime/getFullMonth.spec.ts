import { getFullMonth } from "@/datetime/getFullMonth"

describe("getFullMonth", () => {
  test("should return the week", () => {
    expect(getFullMonth(0)).toEqual("January")
    expect(getFullMonth(5)).toEqual("June")
    expect(getFullMonth(11)).toEqual("December")
  })
})
