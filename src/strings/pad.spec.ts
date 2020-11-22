import { pad } from "@/strings/pad"

describe("pad", () => {
  test("returns string if string length > given length", () => {
    expect(pad("testkey", 5)).toEqual("testkey")
  })

  test("pads string by given length", () => {
    expect(pad("test", 5)).toEqual(" test")
  })

  test("pads string by given length and char", () => {
    expect(pad("test", 5, "*")).toEqual("*test")
    expect(pad("test", 8, "*")).toEqual("**test**")
    expect(pad("test", 9, "*")).toEqual("***test**")
  })
})
