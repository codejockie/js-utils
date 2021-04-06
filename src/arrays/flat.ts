/**
 * Flattens a multi dimensional array one level deep.
 * @param arr A multi dimensional array.
 */
export function flat(arr: unknown[]): unknown[] {
  return ([] as unknown[]).concat(...arr);
}
