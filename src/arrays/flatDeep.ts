/**
 * Flattens a multi dimensional array `depth` level deep.
 * Applies a recursive strategy.
 * @param arr A multi dimensional array.
 * @param depth Number of depth to go.
 */
export function flatDeep(arr: unknown[], depth = 1): unknown[] {
  return depth > 0
    ? arr.reduce(
        (acc: unknown[], val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val),
        []
      )
    : arr.slice();
}
