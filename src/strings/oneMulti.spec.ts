import { oneMulti } from "./oneMulti";

describe("oneMulti", () => {
  test.each`
    character | result
    ${"㈱"}   | ${"(株)"}
    ${"㈲"}   | ${"(有)"}
    ${"㍿"}   | ${"株式会社"}
    ${"㈵"}   | ${"(特)"}
    ${"㈶"}   | ${"(財)"}
    ${"㈳"}   | ${"(社)"}
    ${"㈻"}   | ${"(学)"}
    ${"㈼"}   | ${"(監)"}
  `("converts $character to ($result)", ({ character, result }) => {
    expect(oneMulti(character)).toBe(result);
  });
});
