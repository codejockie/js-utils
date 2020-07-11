import { isKatakana } from "@/strings/isKatakana"

describe("isKatakana", () => {
  test("checks for kanji", () => {
    expect(isKatakana("漢字")).toEqual(false)
    expect(isKatakana("カタカナ")).toEqual(true)
    expect(isKatakana("ひらがな")).toEqual(false)
  })
})