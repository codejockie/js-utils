/**
 * Converts camelcase or pascalcase to snakecase.
 * 
 * @param str String to convert
 * @param separator Seperator character, defaults to `-`
 */
export function toSnakeCase(str: string, separator = "-"): string {
  return str
    .replace(/^[A-Z]+$/, (match) => match.toLowerCase())
    .replace(/^[A-Z]+/, (match) =>
      (match.length > 1
        ? match.replace(/[A-Z]$/, (m) => separator + m.toLowerCase())
        : match
      ).toLowerCase()
    )
    .replace(/[A-Z]/g, (match) => separator + match.toLowerCase())
}
