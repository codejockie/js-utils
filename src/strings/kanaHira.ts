/**
 * Converts full-width katakana to hiragana
 * 全角カタカナをひらがなに変換
 *
 * If there is a voiced or semi-voiced sound, whether to convert it into a single
 * character or not will be a problem.
 * 濁音・半濁音のある場合一文字に変換するかは今後の課題
 *
 * Combine and expand the following characters
 * 以下の文字を結合・展開
 * 「ウ゛」→「ゔ」
 * 「ヷ」→「わ゛」
 * 「ヸ」→「ゐ゛」
 * 「ヹ」→「ゑ゛」
 * 「ヺ」→「を゛」
 * 「ヽ゛」→「ゞ」
 *
 * Katakana not found in hiragana will not be converted
 * ひらがなに無いカタカナは変換しない
 * 「ㇰ」「ㇱ」「ㇲ」「ㇳ」「ㇴ」「ㇵ」「ㇶ」「ㇷ」
 * 「ㇸ」「ㇹ」「ㇺ」「ㇻ」「ㇼ」「ㇽ」「ㇾ」「ㇿ」
 *
 * @param {String} str 変換したい文字列 string you want to convert
 * @param {Boolean} opt 小文字の「ヵ」「ヶ」を変換するかどうか falseを指定した場合は変換なし
 * Whether lowercase "ヵ", "ヶ" is converted, no conversion if false is specified
 */
export function kanaHira(str: string, opt: boolean): string {
  str = str
    .replace(/[ァ-ヴ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0x60))
    .replace(/ﾞ/g, "゛")
    .replace(/ﾟ/g, "゜")
    .replace(/(う゛)/g, "ゔ")
    .replace(/ヷ/g, "わ゛")
    .replace(/ヸ/g, "ゐ゛")
    .replace(/ヹ/g, "ゑ゛")
    .replace(/ヺ/g, "を゛")
    .replace(/(ヽ゛)/g, "ゞ")
    .replace(/ヽ/g, "ゝ")
    .replace(/ヾ/g, "ゞ");
  if (opt !== false) {
    str = str.replace(/ヵ/g, "ゕ").replace(/ヶ/g, "ゖ");
  }
  return str;
}
