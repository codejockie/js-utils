/**
 * Sum of the provided arguments.
 * @param args Any number of parameters (`number` or `number[]`) or Array of numbers
 */
export function sum(...args: unknown[]): number {
  const numbers = (Array.isArray(args[0]) ? flatten(args) : args) as number[]
  return numbers.reduce(
    (a, b: number | number[]) =>
      Array.isArray(b) ? b.reduce((bx, by) => bx + by, a) : a + b,
    0
  )
}

function flatten(args: unknown[]): number[] {
  return args.reduce((ac: number[], cv) => ac.concat(cv as number[]), [])
}
