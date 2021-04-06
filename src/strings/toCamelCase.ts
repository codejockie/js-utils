/**
 * Converts snakecase/kebabcase to camelcase or pascalcase.
 *
 * @param str String to convert
 * @param upper Whether to convert to camelcase or pascalcase. Defaults to `false` - camelcase
 */
export function toCamelCase(str: string, upper = false): string {
  str = str
    .replace(/^[-_ ]/g, "")
    .replace(/[-_ ]./g, (match) => match.charAt(1).toUpperCase());
  return upper ? str.replace(/^[a-z]/g, (match) => match.toUpperCase()) : str;
}
