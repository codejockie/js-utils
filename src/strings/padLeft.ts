/**
 * Pads `str` left to `length`. If `char` is given, it pads `char` to `str`.
 */
export function padLeft(str: string, length: number, char = " "): string {
  if (str.length >= length) {
    return str
  }
  return Array(length - str.length + 1).join(char) + str
}
