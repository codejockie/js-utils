import { toSnakeCase } from "@/strings/toSnakeCase";

describe("toSnakeCase", () => {
  test.each`
    text           | result
    ${"ABCDEF"}    | ${"abcdef"}
    ${"BEGreat"}   | ${"be-great"}
    ${"GoodNews"}  | ${"good-news"}
    ${"className"} | ${"class-name"}
  `("converts to snakecase", ({ text, result }) => {
    expect(toSnakeCase(text)).toEqual(result);
  });

  test.each`
    text             | separator | result
    ${"htmlFor"}     | ${"_"}    | ${"html_for"}
    ${"HtmlForName"} | ${"_"}    | ${"html_for_name"}
  `("allows another separator", ({ text, separator, result }) => {
    expect(toSnakeCase(text, separator)).toEqual(result);
  });
});
