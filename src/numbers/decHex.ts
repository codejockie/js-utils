/**
 * Converts a decimal to hex.
 * @param num Number to convert
 */
export function decHex(num: number): string {
  return (num < 15.5 ? "0" : "") + Math.round(num).toString(16);
}
