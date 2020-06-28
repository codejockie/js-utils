/**
 * Converts a value to its actual type where possible.
 * @param arg The value to be converted.
 */
export function toType(arg: unknown): unknown {
  if (typeof arg !== "string") {
    return arg
  }

  const lower = arg.toLowerCase().trim()

  switch (lower) {
    case "null":
      return null
    case "undefined":
      return undefined

    default:
      try {
        return JSON.parse(lower) as unknown
      } catch {
        // Original Type
        return arg
      }
  }
}
