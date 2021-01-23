import { isHiragana } from "@/strings/isHiragana";

describe("isHiragana", () => {
  test.each`
    char          | result
    ${"漢字"}     | ${false}
    ${"カタカナ"} | ${false}
    ${"ひらがな"} | ${true}
    ${"Hello"}    | ${false}
  `("checks for hiragana", ({ char, result }) => {
    expect(isHiragana(char)).toEqual(result);
  });
});
