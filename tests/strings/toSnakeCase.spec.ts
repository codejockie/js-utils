import { toSnakeCase } from "@/strings/toSnakeCase"

describe("toSnakeCase", () => {
  test("converts to snakecase", () => {
    expect(toSnakeCase("ABCDEF")).toEqual("abcdef")
    expect(toSnakeCase("abcDef")).toEqual("abc-def")
    expect(toSnakeCase("AbcDef")).toEqual("abc-def")
    expect(toSnakeCase("INTNerd")).toEqual("int-nerd")
    expect(toSnakeCase("className")).toEqual("class-name")
  })

  test("allows another seperator", () => {
    expect(toSnakeCase("htmlFor", "_")).toEqual("html_for")
    expect(toSnakeCase("HtmlForName", "_")).toEqual("html_for_name")
  })
})