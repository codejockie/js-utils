import { tabToSpace } from "@/strings/tabToSpace";

describe("tabToSpace", () => {
  test("converts tab to space", () => {
    expect(tabToSpace("    ")).toEqual("    ");
    expect(tabToSpace("        ", 2)).toEqual("        ");
  });
});
