import { getMethods } from "./getMethods";

describe("getMethods", () => {
  class Demo {
    [key: string]: unknown;
    copy() {
      /* copy() */
    }
  }

  const DemoObject = {
    cut() {
      /* cut() */
    },
  };

  interface Func {
    [key: string]: unknown;
  }

  /** @class */
  const DemoFunc = (function (this: Func) {
    /* DemoFunc */
  } as unknown) as { new (): Func };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  DemoFunc.prototype.paste = function () {
    /* paste() */
  };

  test("returns methods in a class", () => {
    expect(getMethods(new Demo())).toEqual(["copy"]);
  });

  test("returns methods in an object", () => {
    expect(getMethods(DemoObject)).toEqual(["cut"]);
  });

  test("returns methods in a function", () => {
    expect(getMethods(new DemoFunc())).toEqual(["paste"]);
  });
});
