/**
 * Gets the week for the given date.
 * @param date Custom Date instance
 */
export function week(date: Date): number {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const start = new Date(year, 0, 1).valueOf();
  const end = new Date(year, month, day).valueOf();
  const dayOfYear = (end - start + 86400000) / 86400000;
  return Math.ceil(dayOfYear / 7);
}
