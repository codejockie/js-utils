/**
 * 半角から全角に置き換え
 *
 * チルダは全角チルダに変換
 *
 * @param {String} str 変換したい文字列
 * @param {Boolean} tilde チルダ falseを指定した場合は変換なし
 * @param {Boolean} mark 記号 falseを指定した場合は変換なし
 * @param {Boolean} hanKana 半角カナ記号 falseを指定した場合は変換なし
 * @param {Boolean} space スペース falseを指定した場合は変換なし
 * @param {Boolean} alpha 英字 falseを指定した場合は変換なし
 * @param {Boolean} num 数字 falseを指定した場合は変換なし
 */
export function hanZen(
  str: string,
  tilde: boolean,
  mark: boolean,
  hanKana: boolean,
  space: boolean,
  alpha: boolean,
  num: boolean
): string {
  if (alpha !== false) {
    str = str.replace(/[A-Za-z]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 65248)
    })
  }
  if (num !== false) {
    str = str.replace(/\d/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 65248)
    })
  }
  if (mark !== false) {
    const reg = /[!"#\$%&'\(\)\*\+,\-\.\/:;<=>\?@\[\\\]\^_`\{\|\}]/g
    str = str.replace(reg, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 65248)
    })
  }
  if (tilde !== false) {
    str = str.replace(/~/g, "～")
  }
  if (space !== false) {
    str = str.replace(/ /g, "　")
  }
  if (hanKana !== false) {
    // prettier-ignore
    const charMap: { [key: string]: string } = { "｡": "。", "､": "、", "｢": "「", "｣": "」", "･": "・" }
    const reg = new RegExp("(" + Object.keys(charMap).join("|") + ")", "g")
    str = str.replace(reg, function (match) {
      return charMap[match]
    })
  }
  return str
}
