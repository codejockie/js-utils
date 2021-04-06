export function toFullWidth(arg: string): string {
  return arg.replace(/[a-zA-Z0-9]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) - 0x20 + 0xff00)
  );
}
