import { getWeekDay } from "@/datetime/getWeekDay"

describe("getWeekDay", () => {
  test("should return the week", () => {
    expect(getWeekDay(1)).toEqual("Monday")
    expect(getWeekDay(5)).toEqual("Friday")
    expect(getWeekDay(3)).toEqual("Wednesday")
  })
})
