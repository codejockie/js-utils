/**
 * Expand single character to multiple characters
 * 一文字で表記される文字を複数文字に展開する
 * I wish this would not be included in the column for entering the company name, etc
 * 会社名等を入力する欄でこれは入れないでほしいな～と思う文字
 *
 * @param {String} str 変換する文字列 String to convert
 */
export function oneMulti(str: string): string {
  // prettier-ignore
  const charMap: { [key: string]: string } = {
    "㈱": "(株)", "㈲": "(有)", "㈳": "(社)", "㈵": "(特)",
    "㈶": "(財)", "㈻": "(学)", "㈼": "(監)", "㍿": "株式会社"
  }
  const reg = new RegExp("(" + Object.keys(charMap).join("|") + ")", "g");
  return str.replace(reg, (match) => charMap[match]);
}
