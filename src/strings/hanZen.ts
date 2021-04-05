import { Options } from "@/types/options";
import { fromCharCodeAdd } from "@/utils/fromCharCode";

/**
 * Replace half-width with full-width
 * 半角から全角に置き換え
 *
 * Tildes are converted to full-width tildes
 * チルダは全角チルダに変換
 *
 * @param {String} str 変換したい文字列 string you want to convert
 * @param {Boolean} tilde チルダ falseを指定した場合は変換なし if false, tildes are not converted
 * @param {Boolean} mark 記号 falseを指定した場合は変換なし if false, symbols are not converted
 * @param {Boolean} hanKana 半角カナ記号 falseを指定した場合は変換なし if false, half-width symbols are not converted
 * @param {Boolean} space スペース falseを指定した場合は変換なし if false, space is not converted
 * @param {Boolean} alpha 英字 falseを指定した場合は変換なし if false, alphabets are not converted
 * @param {Boolean} num 数字 falseを指定した場合は変換なし if false, numbers are not converted
 */
export function hanZen(str: string, options: Options): string {
  const { alpha, hanKana, mark, num, space, tilde } = options;
  if (alpha !== false) {
    str = str.replace(/[A-Za-z]/g, fromCharCodeAdd);
  }
  if (num !== false) {
    str = str.replace(/\d/g, fromCharCodeAdd);
  }
  if (mark !== false) {
    const reg = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}]/g;
    str = str.replace(reg, fromCharCodeAdd);
  }
  if (tilde !== false) {
    str = str.replace(/~/g, "～");
  }
  if (space !== false) {
    str = str.replace(/ /g, "　");
  }
  if (hanKana !== false) {
    // prettier-ignore
    const charMap: { [key: string]: string } = { "｡": "。", "､": "、", "｢": "「", "｣": "」", "･": "・" }
    const reg = new RegExp("(" + Object.keys(charMap).join("|") + ")", "g");
    str = str.replace(reg, (match) => charMap[match]);
  }
  return str;
}
