import { isStrongPassword } from "./isStrongPassword";

describe("isStrongPassword", () => {
  describe("validates password", () => {
    test("allows @ character", () => {
      expect(isStrongPassword("P@ssword1")).toEqual(true);
    });

    test("with less than the minimum characters", () => {
      expect(isStrongPassword("C@ntUse")).toEqual(false);
    });

    test("with no lowercase", () => {
      expect(isStrongPassword("N0_LOWERCASE")).toEqual(false);
    });

    test("with no uppercase", () => {
      expect(isStrongPassword("n0_uppercase")).toEqual(false);
    });

    test("with no number", () => {
      expect(isStrongPassword("!HasNoNumber?")).toEqual(false);
    });

    test("with no special character", () => {
      expect(isStrongPassword("No5PECIALCharacter")).toEqual(false);
    });

    test("minimum 8, 1 uppercase, lowercase, number and special characters", () => {
      expect(isStrongPassword("!skidJC_1b33@")).toEqual(true);
    });

    describe("does not permit whitespace(s)", () => {
      test("with whitespace", () => {
        expect(isStrongPassword(" !skdJC_1b33@ ")).toEqual(false);
        expect(isStrongPassword("P@ss word1")).toEqual(false);
      });
    });
  });
});
