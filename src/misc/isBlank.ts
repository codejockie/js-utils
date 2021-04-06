/**
 * Tests whether argument is blank.
 * @param arg Can be any of `""`, `[]`, `{}` `null`, `undefined`
 */
export function isBlank(arg: unknown): boolean {
  return (
    arg == null ||
    (typeof arg === "string" && arg.trim() === "") ||
    (typeof arg === "object" &&
      Object.keys(arg as Record<string, unknown>).length === 0)
  );
}
