const meridiems = ["AM", "PM"];
/**
 * Get times from start of time (00:00) and end of time (23:59) at an increment of `interval`.
 * @param interval
 * @param meridiem
 */
export function times(interval: number, meridiem = true): string[] {
  if (interval == null || interval <= 0) {
    throw new Error("Interval must be an integer greater than zero");
  }

  return Array.from(
    {
      length: (24 * 60) / interval,
    },
    (_, i) => {
      let hour: number | string = Math.floor((i * interval) / 60);
      let min: number | string = i * interval - hour * 60;
      const label = meridiem ? ` ${meridiems[Math.floor(hour / 12)]}` : "";
      // Pad zero to the left of minute
      min = `0${min}`.slice(-2);
      // Convert to 12 hours time (if meridiem = true) and pad
      hour = hour == 12 ? 12 : `0${meridiem ? hour % 12 : hour}`.slice(-2);
      return `${hour}:${min}${label}`;
    }
  );
}
