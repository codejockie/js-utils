export function isKanji(char: string): boolean {
  /**
   * Kanji Character Codes
   * Common Kanji: 4e00 - 9faf
   * Rare Kanji: 3400 - 4dbf
   */
  return (
    (char >= "\u4e00" && char <= "\u9faf") ||
    (char >= "\u3400" && char <= "\u4dbf")
  )
}
