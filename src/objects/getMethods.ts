export function getMethods<T>(
  toCheck: T & { [key: string]: unknown }
): string[] {
  let methods: string[] = [];
  let obj = toCheck;

  do {
    methods = methods.concat(Object.getOwnPropertyNames(obj));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  } while ((obj = Object.getPrototypeOf(obj)) && obj != Object.prototype);

  return methods.sort().filter((method) => {
    return typeof toCheck[method] === "function" && method !== "constructor"; // Not the constructor
  });
}
