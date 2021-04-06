export function isKatakana(char: string): boolean {
  /*
   * Katakana Character Codes: 30a0 - 30ff
   */
  return char >= "\u30a0" && char <= "\u30ff";
}
