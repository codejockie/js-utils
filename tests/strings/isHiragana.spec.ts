import { isHiragana } from "@/strings/isHiragana"

describe("isHiragana", () => {
  test("checks for kanji", () => {
    expect(isHiragana("漢字")).toEqual(false)
    expect(isHiragana("カタカナ")).toEqual(false)
    expect(isHiragana("ひらがな")).toEqual(true)
  })
})