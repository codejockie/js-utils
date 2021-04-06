/**
 * Gets the Unix epoch timestamp
 */
export function unix(): number {
  return Math.round(Date.now() / 1000);
}
