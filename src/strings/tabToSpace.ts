/**
 * Converts tab to space.
 * @param str String with tab character
 * @param num Number of spaces to use
 */
export function tabToSpace(str: string, num?: number): string {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const space = new Array(Number.isNaN(Number(num)) ? 4 : num! + 1).join(" ");
  return str.replace(/\t/g, space);
}
