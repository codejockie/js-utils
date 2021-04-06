/**
 * Gets the number of days elapsed between two dates. `to` not inclusive.
 * @param from Start date
 * @param to End date
 */
export function diff(from: Date, to: Date): number {
  const timeDiff = Math.abs(to.getTime() - from.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}
