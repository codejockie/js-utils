import { removeNil } from "@/misc/removeNil"

describe("removeNil", () => {
  test("(Object) removes null, undefined values", () => {
    const testData = {
      emptyString: "",
      integer: 0,
      nullValue: null,
      undefined: undefined,
      array: [1, 2, 3],
      object: {
        string: "value",
      },
      arrayOfObjects: [
        {
          string: "value",
          emptyString: "",
          integer: 0,
          nullValue: null,
          array: [1, 2, 3],
        },
      ],
    }
    const expected = {
      array: [1, 2, 3],
      arrayOfObjects: [
        { array: [1, 2, 3], emptyString: "", integer: 0, string: "value" },
      ],
      emptyString: "",
      integer: 0,
      object: { string: "value" },
    }
    expect(removeNil(testData)).toEqual(expected)
  })

  test("(Array) removes null, undefined values", () => {
    const data = [{ null: null, undefined: undefined }]
    const expected = [{}]
    expect(removeNil(data)).toEqual(expected)
  })
})
