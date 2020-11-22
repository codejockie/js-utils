/**
 * 全角カタカナをひらがなに変換
 *
 * 濁音・半濁音のある場合一文字に変換するかは今後の課題
 *
 * 以下の文字を結合・展開
 * 「ウ゛」→「ゔ」
 * 「ヷ」→「わ゛」
 * 「ヸ」→「ゐ゛」
 * 「ヹ」→「ゑ゛」
 * 「ヺ」→「を゛」
 * 「ヽ゛」→「ゞ」
 *
 * ひらがなに無いカタカナは変換しない
 * 「ㇰ」「ㇱ」「ㇲ」「ㇳ」「ㇴ」「ㇵ」「ㇶ」「ㇷ」
 * 「ㇸ」「ㇹ」「ㇺ」「ㇻ」「ㇼ」「ㇽ」「ㇾ」「ㇿ」
 *
 * @param {String} str 変換したい文字列
 * @param {Boolean} opt 小文字の「ヵ」「ヶ」を変換するかどうか falseを指定した場合は変換なし
 */
export function kanaHira(str: string, opt: boolean) {
  str = str
    .replace(/[ァ-ヴ]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0x60)
    })
    .replace(/ﾞ/g, "゛")
    .replace(/ﾟ/g, "゜")
    .replace(/(う゛)/g, "ゔ")
    .replace(/ヷ/g, "わ゛")
    .replace(/ヸ/g, "ゐ゛")
    .replace(/ヹ/g, "ゑ゛")
    .replace(/ヺ/g, "を゛")
    .replace(/(ヽ゛)/g, "ゞ")
    .replace(/ヽ/g, "ゝ")
    .replace(/ヾ/g, "ゞ")
  if (opt !== false) {
    str = str.replace(/ヵ/g, "ゕ").replace(/ヶ/g, "ゖ")
  }
  return str
}
