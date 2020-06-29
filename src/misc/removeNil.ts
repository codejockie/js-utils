/**
 * Removes null and undefined values.
 * @param arg An object or array
 */
export function removeNil(arg: Record<string, unknown> | unknown[]): unknown {
  const stringified = JSON.stringify(arg, (k: string, value: unknown) =>
    value == null ? undefined : value
  )
  return JSON.parse(stringified) as unknown
}
