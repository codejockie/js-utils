/**
 * Converts hiragana to full-width katakana
 * ひらがなを全角カタカナに変換
 *
 * If there is a voiced or semi-voiced sound, whether to convert it into a single
 * character or not will be a problem.
 * 濁音・半濁音のある場合一文字に変換するかは今後の課題
 *
 * The following characters are combined and converted into katakana
 * 以下の文字は結合してカタカナに変換
 * 「う゛」→「ヴ」
 * 「わ゛」→「ヷ」
 * 「ゐ゛」→「ヸ」
 * 「ゑ゛」→「ヹ」
 * 「を゛」→「ヺ」
 * 「ゝ゛」→「ヾ」
 *
 * @param {String} str 変換したい文字列 string you want to convert
 * @param {Boolean} opt 小文字の「ゕ」「ゖ」を変換するかどうか falseを指定した場合は変換なし
 * Whether lowercase "ヵ", "ヶ" is converted, no conversion if false is specified
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
