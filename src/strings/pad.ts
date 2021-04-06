/**
 * Pads `str` to `length`. If `char` is given, it pads `char` to `str`, pads left when unbalanced.
 */
export function pad(str: string, length: number, char = " "): string {
  if (str.length >= length) {
    return str;
  }
  const lengthDiff = length - str.length;
  const left = Array(Math.ceil(lengthDiff / 2) + 1).join(char);
  const right = Array(Math.floor(lengthDiff / 2) + 1).join(char);
  return left + str + right;
}
