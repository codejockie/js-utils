import { padLeft } from "@/strings/padLeft";

describe("padLeft", () => {
  test("returns string if string length > given length", () => {
    expect(padLeft("testkey", 5)).toEqual("testkey");
  });

  test("pads string left by given length", () => {
    expect(padLeft("test", 5)).toEqual(" test");
  });

  test("pads string left by given length and char", () => {
    expect(padLeft("test", 5, "*")).toEqual("*test");
    expect(padLeft("test", 8, "*")).toEqual("****test");
  });
});
