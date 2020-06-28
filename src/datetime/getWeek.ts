const TODAY = new Date()

export function getWeek(today = TODAY): number {
  const date = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  const start = new Date(year, 0, 1).valueOf()
  const end = new Date(year, month, date).valueOf()
  const dayOfYear = (end - start + 86400000) / 86400000
  return Math.ceil(dayOfYear / 7)
}