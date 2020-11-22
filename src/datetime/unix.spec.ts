import { unix } from "@/datetime/unix"

describe("unix", () => {
  jest.spyOn(global.Date, "now").mockImplementationOnce(() => 1591997878135)
  test("should get the current unix epoch time", () => {
    expect(unix()).toEqual(1591997878)
  })
})
