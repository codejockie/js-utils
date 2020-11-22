import { sum } from "@/numbers/sum"

describe("sum", () => {
  test("should sum array of numbers", () => {
    expect(sum([8, 6])).toEqual(14)
    expect(sum([8, 6, 2])).toEqual(16)
    expect(sum([8, 6, 2, 4])).toEqual(20)
  })

  test("should sum any number of parameters", () => {
    expect(sum(8, 6)).toEqual(14)
    expect(sum(8, 6, 2)).toEqual(16)
    expect(sum(8, 6, 2, 4)).toEqual(20)
  })

  test("should sum array of number and any number of parameters", () => {
    expect(sum(4, [8, 6, 2])).toEqual(20)
    expect(sum(10, [8, 6], [2, 4])).toEqual(30)
    expect(sum([4, 2, 8, 6], 10, [9])).toEqual(39)
    expect(sum([4, 2, 8, 6], 10, [9], 1)).toEqual(40)
  })
})
