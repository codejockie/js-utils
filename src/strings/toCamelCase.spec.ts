import { toCamelCase } from "@/strings/toCamelCase";

describe("toCamelCase", () => {
  test.each`
    text          | result
    ${"ABCDEF"}   | ${"ABCDEF"}
    ${"abc-Def"}  | ${"abcDef"}
    ${"Abc Def"}  | ${"AbcDef"}
    ${"INT_Nerd"} | ${"INTNerd"}
  `("converts to camelcase", ({ text, result }) => {
    expect(toCamelCase(text)).toEqual(result);
  });

  test.each`
    text           | upper   | result
    ${"abc-Def"}   | ${true} | ${"AbcDef"}
    ${"Abc Def"}   | ${true} | ${"AbcDef"}
    ${"INT_Nerd"}  | ${true} | ${"INTNerd"}
    ${"className"} | ${true} | ${"ClassName"}
  `("converts to pascalcase", ({ text, result, upper }) => {
    expect(toCamelCase(text, upper)).toEqual(result);
  });
});
