import { hexDec } from "@/numbers/hexDec"

describe("hexDec", () => {
  test("converts hex to decimal", () => {
    expect(hexDec("1")).toEqual(1)
    expect(hexDec("A")).toEqual(10)
    expect(hexDec("f")).toEqual(15)
    expect(hexDec("10")).toEqual(16)
  })
})
