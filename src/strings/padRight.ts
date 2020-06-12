/**
 * Pads `str` right to `length`. If `char` is given, it pads `char` to `str`.
 */
export function padRight(str: string, length: number, char = " "): string {
  if (str.length >= length) {
    return str
  }
  return str + Array(length - str.length + 1).join(char)
}
