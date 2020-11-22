/**
 * 全角から半角に置き換え
 *
 * 全角チルダ、全角波ダッシュ共に半角チルダに変換
 * 全角ハイフン、全角ダッシュ、全角マイナス記号は半角ハイフンに変換
 * 長音符は半角ハイフンに含めない（住所の地名等に使用される為）
 *
 * 今は良いがUnicode 8.0で波ダッシュの形が変わるみたいなので、波ダッシュを変換に
 * 含めるべきかどうかは検討が必要
 *
 * @param {String} str 変換したい文字列
 * @param {Boolean} tilde チルダ falseを指定した場合は変換なし
 * @param {Boolean} mark 記号 falseを指定した場合は変換なし
 * @param {Boolean} hanKana 半角カナ記号 trueを指定した場合のみ変換
 * @param {Boolean} space スペース falseを指定した場合は変換なし
 * @param {Boolean} alpha 英字 falseを指定した場合は変換なし
 * @param {Boolean} num 数字 falseを指定した場合は変換なし
 */
export function zenHan(
  str: string,
  tilde: boolean,
  mark: boolean,
  hanKana: boolean,
  space: boolean,
  alpha: boolean,
  num: boolean
) {
  if (alpha !== false) {
    str = str.replace(/[Ａ-Ｚａ-ｚ]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248)
    })
  }
  if (num !== false) {
    str = str.replace(/[０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248)
    })
  }
  if (mark !== false) {
    const reg = /[！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g
    str = str
      .replace(reg, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248)
      })
      .replace(/[‐－―]/g, "-")
  }
  if (tilde !== false) {
    str = str.replace(/[～〜]/g, "~")
  }
  if (space !== false) {
    str = str.replace(/　/g, " ")
  }
  if (hanKana === true) {
    // prettier-ignore
    const charMap: { [key: string]: string } = { "。": "｡", "、": "､", "「": "｢", "」": "｣", "・": "･" }
    const reg = new RegExp(`(${Object.keys(charMap).join("|")})`, "g")
    str = str.replace(reg, function (match) {
      return charMap[match]
    })
  }
  return str
}
