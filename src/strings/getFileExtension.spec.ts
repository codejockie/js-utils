import { getFileExtension } from "./getFileExtension";

describe("getFileExtension", () => {
  test.each`
    file                    | extension
    ${".gitignore"}         | ${""}
    ${"file.docx"}          | ${"docx"}
    ${"index.js"}           | ${"js"}
    ${"image.png"}          | ${"png"}
    ${"home.controller.ts"} | ${"ts"}
  `("gets $file extension ($extension)", ({ file, extension }) => {
    expect(getFileExtension(file)).toBe(extension);
  });
});
