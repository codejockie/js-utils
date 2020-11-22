import { toTitleCase } from "@/strings/toTitleCase"

describe("toTitleCase", () => {
  test("converts a string to title case", () => {
    expect(toTitleCase("I'm quick and light on my feet")).toEqual("I'm Quick And Light On My Feet")
    expect(toTitleCase("A quick brown fox")).toEqual("A Quick Brown Fox")
    expect(toTitleCase("jumped over the lazy dog")).toEqual("Jumped Over The Lazy Dog")
  })
})
