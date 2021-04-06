function getTimeString(mins: number, secs: number) {
  return `${mins < 10 ? 0 : ""}${mins}:${secs < 10 ? 0 : ""}${secs}`;
}

export function getTimes(): string[] {
  let mins = 0;
  let secs = 0;
  const times = [];

  while (mins < 24) {
    while (secs < 60) {
      if (secs === 0) {
        times.push(getTimeString(mins, secs));
      }
      secs += 15;
      if (secs > 45) continue;
      times.push(getTimeString(mins, secs));
    }
    secs -= secs;
    mins++;
  }
  return times;
}
