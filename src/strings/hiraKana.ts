/**
 * ひらがなを全角カタカナに変換
 *
 * Converts hiragana to full-width katakana
 *
 * 濁音・半濁音のある場合一文字に変換するかは今後の課題
 *
 * 以下の文字は結合してカタカナに変換
 * 「う゛」→「ヴ」
 * 「わ゛」→「ヷ」
 * 「ゐ゛」→「ヸ」
 * 「ゑ゛」→「ヹ」
 * 「を゛」→「ヺ」
 * 「ゝ゛」→「ヾ」
 *
 * @param {String} str 変換したい文字列 String to convert.
 * @param {Boolean} opt 小文字の「ゕ」「ゖ」を変換するかどうか falseを指定した場合は変換なし
 */
export function hiraKana(str: string, opt: boolean): string {
  str = str
    .replace(/[ぁ-ゔ]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0x60))
    .replace(/ﾞ/g, "゛")
    .replace(/ﾟ/g, "゜")
    .replace(/(ウ゛)/g, "ヴ")
    .replace(/(ワ゛)/g, "ヷ")
    .replace(/(ヰ゛)/g, "ヸ")
    .replace(/(ヱ゛)/g, "ヹ")
    .replace(/(ヲ゛)/g, "ヺ")
    .replace(/(ゝ゛)/g, "ヾ")
    .replace(/ゝ/g, "ヽ")
    .replace(/ゞ/g, "ヾ")
  if (opt !== false) {
    str = str.replace(/ゕ/g, "ヵ").replace(/ゖ/g, "ヶ")
  }
  return str
}
