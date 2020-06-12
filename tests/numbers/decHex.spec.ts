import { decHex } from "@/numbers/decHex"

describe("decHex", () => {
  test("converts decimal to hex", () => {
    expect(decHex(1)).toEqual("01")
    expect(decHex(10)).toEqual("0a")
    expect(decHex(15)).toEqual("0f")
    expect(decHex(16)).toEqual("10")
  })
})
