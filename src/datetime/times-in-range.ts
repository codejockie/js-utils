const meridiems = ["AM", "PM"];
const timeFormat = /^\d{1,2}:\d{1,2} ?((A|P)M)?$/i;

/**
 * Get times between two times at an increment of `interval`.
 * @param interval The interval is an integer greater than 0.
 * @param from The start point in time.
 * @param to The end point in time. This is excluded in the result.
 */
export function timesInRange(
  interval: number,
  from: string | Date,
  to: string | Date
): string[] {
  const isValidFrom = typeof from === "string" && timeFormat.test(from);
  const isValidTo = typeof to === "string" && timeFormat.test(to);
  const isValidStringFormat = isValidFrom && isValidTo;
  const isValidDateFormat = from instanceof Date && to instanceof Date;
  if (!isValidStringFormat && !isValidDateFormat) {
    throw new Error(
      "Invalid time format for 'from' or 'to'. Expected 'dd:dd am|pm' time string or a Date."
    );
  }
  if (interval == null || interval <= 0) {
    throw new Error("Interval must be an integer greater than zero");
  }

  let endDate: Date;
  let startDate: Date;

  if (typeof from === "string" && typeof to === "string") {
    endDate = new Date(`0000-01-01 ${to}`);
    startDate = new Date(`0000-01-01 ${from}`);
  } else {
    endDate = to as Date;
    startDate = from as Date;
  }

  const times = [];
  const end = endDate.getTime();
  let start = startDate.getTime();

  while (start < end) {
    let hour: number | string = new Date(start).getHours();
    let minute: number | string = new Date(start).getMinutes();
    const meridiem = meridiems[Math.floor(hour / 12)];
    minute = `0${minute}`.slice(-2);
    hour = hour == 12 ? 12 : `0${hour % 12}`.slice(-2);
    times.push(`${hour}:${minute} ${meridiem}`);
    start += interval * 1000 * 60;
  }
  return times;
}
