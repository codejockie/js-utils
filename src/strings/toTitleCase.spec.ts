import { toTitleCase } from "@/strings/toTitleCase";

describe("toTitleCase", () => {
  test.each`
    text                                | result
    ${"I'm quick and light on my feet"} | ${"I'm Quick And Light On My Feet"}
    ${"A quick brown fox"}              | ${"A Quick Brown Fox"}
    ${"jumped over the lazy dog"}       | ${"Jumped Over The Lazy Dog"}
  `("converts a string to title case", ({ text, result }) => {
    expect(toTitleCase(text)).toEqual(result);
  });
});
