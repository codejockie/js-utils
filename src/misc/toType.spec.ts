import { toType } from "@/misc/toType"

describe("toType", () => {
  test("given a non string arg, return original type", () => {
    expect(toType([])).toEqual([])
    expect(toType("() => {}")).toEqual("() => {}")
    expect(toType({ type: "object" })).toEqual({ type: "object" })
  })

  test("should convert to actual type", () => {
    expect(toType("5000")).toEqual(5000)
    expect(toType("TRUE")).toEqual(true)
    expect(toType("null")).toEqual(null)
    expect(toType("false")).toEqual(false)
    expect(toType("undefined")).toEqual(undefined)
  })
})
