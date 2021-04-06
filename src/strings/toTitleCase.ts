/**
 * Converts all the alphabetic characters in a string to title case.
 * @param string String to convert.
 */
export function toTitleCase(string: string): string {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
