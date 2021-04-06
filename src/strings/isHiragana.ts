export function isHiragana(char: string): boolean {
  /*
   * Hiragana Character Codes: 3040 - 309f
   */
  return char >= "\u3040" && char <= "\u309f";
}
