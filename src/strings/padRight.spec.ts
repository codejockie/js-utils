import { padRight } from "@/strings/padRight";

describe("padRight", () => {
  test("returns string if string length > given length", () => {
    expect(padRight("longer", 5)).toEqual("longer");
  });

  test("pads string right by given length", () => {
    expect(padRight("news", 5)).toEqual("news ");
  });

  test("pads string right by given length and char", () => {
    expect(padRight("news", 5, "*")).toEqual("news*");
    expect(padRight("news", 9, "*")).toEqual("news*****");
  });
});
