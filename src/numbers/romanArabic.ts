const romanList: { [key: string]: number } = {
  CM: 900,
  M: 1000,
  CD: 400,
  D: 500,
  XC: 90,
  C: 100,
  XL: 40,
  L: 50,
  IX: 9,
  X: 10,
  IV: 4,
  V: 5,
  I: 1,
};

export function romanArabic(romanNum: string): number {
  let index = 0;
  let number = 0;
  romanNum = romanNum.toUpperCase();

  for (const key in romanList) {
    index = romanNum.indexOf(key);
    while (index != -1) {
      number += romanList[key];
      romanNum = romanNum.replace(key, "-");
      index = romanNum.indexOf(key);
    }
  }
  return number;
}
