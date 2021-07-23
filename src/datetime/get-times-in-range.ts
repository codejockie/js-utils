const meridiems = ["AM", "PM"];
const timeFormat = /^\d{1,2}:\d{1,2} ?((A|P)M)?$/i;

export const getTimesInRange = (
  interval: number,
  from: string | Date,
  to: string | Date
) => {
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
    endDate = new Date(`2000-01-01 ${to}`);
    startDate = new Date(`2000-01-01 ${from}`);
  } else {
    endDate = to as Date;
    startDate = from as Date;
  }

  const times = [];
  const end = endDate.getTime();
  let start = startDate.getTime();

  while (start < end) {
    let hour = new Date(start).getHours();
    let minute = new Date(start).getMinutes();
    let meridianIndicator = meridiems[Math.floor(hour / 12)];
    const paddedMinute = ("0" + minute).slice(-2);
    const paddedHour = hour == 12 ? 12 : ("0" + (hour % 12)).slice(-2);
    times.push(paddedHour + ":" + paddedMinute + " " + meridianIndicator);
    start += interval * 1000 * 60;
  }
  return times;
};
