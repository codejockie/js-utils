import { isBlank } from "@/misc/isBlank"

describe("isBlank", () => {
  test("true for empty/blank value", () => {
    expect(isBlank("")).toEqual(true)
    expect(isBlank({ })).toEqual(true)
    expect(isBlank([])).toEqual(true)
    expect(isBlank(null)).toEqual(true)
    expect(isBlank(undefined)).toEqual(true)
  })

  test("false for non-empty value", () => {
    expect(isBlank("1")).toEqual(false)
    expect(isBlank(628)).toEqual(false)
    expect(isBlank({ data: "Not empty" })).toEqual(false)
    expect(isBlank(["In the year", 2020, "Covid-19 set economies back"])).toEqual(false)
  })
})
