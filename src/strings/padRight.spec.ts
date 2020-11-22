import { padRight } from "@/strings/padRight"

describe("padRight", () => {
  test("returns string if string length > given length", () => {
    expect(padRight("testkey", 5)).toEqual("testkey")
  })

  test("pads string right by given length", () => {
    expect(padRight("test", 5)).toEqual("test ")
  })

  test("pads string right by given length and char", () => {
    expect(padRight("test", 5, "*")).toEqual("test*")
    expect(padRight("test", 9, "*")).toEqual("test*****")
  })
})
