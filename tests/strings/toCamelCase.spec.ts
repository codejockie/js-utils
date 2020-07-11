import { toCamelCase } from "@/strings/toCamelCase"

describe("toCamelCase", () => {
  test("converts to camelcase", () => {
    expect(toCamelCase("ABCDEF")).toEqual("ABCDEF")
    expect(toCamelCase("abc-Def")).toEqual("abcDef")
    expect(toCamelCase("Abc Def")).toEqual("AbcDef")
    expect(toCamelCase("INT_Nerd")).toEqual("INTNerd")
    expect(toCamelCase("className")).toEqual("className")
  })

  test("converts to pascalcase", () => {
    expect(toCamelCase("abcDEF", true)).toEqual("AbcDEF")
    expect(toCamelCase("abc-Def", true)).toEqual("AbcDef")
    expect(toCamelCase("Abc Def", true)).toEqual("AbcDef")
    expect(toCamelCase("INT_Nerd", true)).toEqual("INTNerd")
    expect(toCamelCase("className", true)).toEqual("ClassName")
  })
})