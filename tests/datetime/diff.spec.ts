import { diff } from "@/datetime/diff"

describe("diff", () => {
  test("should return the week", () => {
    expect(diff(new Date("2020/06/01"), new Date("2020/06/30"))).toEqual(29)
    expect(diff(new Date("2020/03/01"), new Date("2020/07/10"))).toEqual(131)
  })
})
