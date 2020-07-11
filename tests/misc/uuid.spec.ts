import { uuid } from "@/misc/uuid"

describe("uuid", () => {
  test("generates uuid v4", () => {
    expect(uuid()).toHaveLength(36)
    expect(uuid().split("-")[2]).toHaveLength(4)
  })
})
