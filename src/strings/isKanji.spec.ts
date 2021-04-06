import { isKanji } from "@/strings/isKanji";

describe("isKanji", () => {
  test("checks for kanji", () => {
    // Common
    expect(isKanji("漢字")).toEqual(true);
    expect(isKanji("表外字")).toEqual(true);
    // Rare
    expect(isKanji("䶿")).toEqual(true);
    expect(isKanji("㐀丠")).toEqual(true);
    // Not kanji
    expect(isKanji("カタカナ")).toEqual(false);
    expect(isKanji("ひらがな")).toEqual(false);
  });
});
