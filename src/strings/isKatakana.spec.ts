import { isKatakana } from "@/strings/isKatakana";

describe("isKatakana", () => {
  test.each`
    char          | result
    ${"漢字"}     | ${false}
    ${"カタカナ"} | ${true}
    ${"ひらがな"} | ${false}
  `("checks for katakana", ({ char, result }) => {
    expect(isKatakana(char)).toEqual(result);
  });
});
