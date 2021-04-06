import { isBlank } from "@/misc/isBlank";

export function toNumber(arg: unknown): unknown {
  if (isBlank(arg)) {
    return arg;
  }

  const number = parseFloat(String(arg));

  if (
    Number.isNaN(Number(number)) ||
    number.toString().length !== (arg as string).toString().length
  ) {
    return arg;
  }

  return number;
}
