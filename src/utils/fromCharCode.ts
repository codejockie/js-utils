export const fromCharCodeAdd = (s: string): string =>
  String.fromCharCode(s.charCodeAt(0) + 65248);

export const fromCharCodeSub = (s: string): string =>
  String.fromCharCode(s.charCodeAt(0) - 65248);
