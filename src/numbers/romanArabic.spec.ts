import { romanArabic } from "@/numbers/romanArabic";

describe("romanArabic", () => {
  it("converts roman numerals to arabic numerals", () => {
    expect(romanArabic("LXXIX")).toEqual(79);
    expect(romanArabic("CMLX")).toEqual(960);
    expect(romanArabic("MMXIX")).toEqual(2019);
    expect(romanArabic("DCCLXXXVIII")).toEqual(788);
    expect(romanArabic("CCCLXXXVIII")).toEqual(388);
  });
});
