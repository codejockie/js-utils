import { hankanaZenkana } from "@/strings/hankanaZenkana";

describe("hankanaZenkana", () => {
  test("checks for kanji", () => {
    expect(hankanaZenkana("ｰ")).toEqual("ー");
    expect(hankanaZenkana("ｶﾀｶﾅ")).toEqual("カタカナ");
  });
});
