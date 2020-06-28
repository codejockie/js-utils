import { toNumber } from "@/numbers/toNumber"

describe("toNumber", () => {
  test("converts to a number when possible", () => {
    expect(toNumber("")).toEqual("")
    expect(toNumber({ })).toEqual({ })
    expect(toNumber(628)).toEqual(628)
    expect(toNumber("0628")).toEqual("0628")
    expect(toNumber(undefined)).toEqual(undefined)
  })
})
