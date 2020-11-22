/**
 * 一文字で表記される文字を複数文字に展開する
 * 会社名等を入力する欄でこれは入れないでほしいな～と思う文字
 *
 * @param {String} str 変換する文字列
 */
export function oneMulti(str: string) {
  // prettier-ignore
  const charMap: { [key: string]: string } = {
    "㈱": "(株)", "㈲": "(有)", "㈳": "(社)", "㈵": "(特)",
    "㈶": "(財)", "㈻": "(学)", "㈼": "(監)", "㍿": "株式会社"
  }
  const reg = new RegExp("(" + Object.keys(charMap).join("|") + ")", "g")
  return str.replace(reg, function (match) {
    return charMap[match]
  })
}
