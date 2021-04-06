import { hiraKana } from "@/strings/hiraKana";

describe("hiraKana", () => {
  describe("Non-contractions", () => {
    describe("gojūon", () => {
      test.each`
        hiragana        | katakana        | option
        ${"あ	い	う	え	お"} | ${"ア	イ	ウ	エ	オ"} | ${false}
        ${"か	き	く	け	こ"} | ${"カ	キ	ク	ケ	コ"} | ${false}
        ${"さ	し	す	せ	そ"} | ${"サ	シ	ス	セ	ソ"} | ${false}
        ${"た	ち	つ	て	と"} | ${"タ	チ	ツ	テ	ト"} | ${false}
        ${"な	に	ぬ	ね	の"} | ${"ナ	ニ	ヌ	ネ	ノ"} | ${false}
        ${"は	ひ	ふ	へ	ほ"} | ${"ハ	ヒ	フ	ヘ	ホ"} | ${false}
        ${"ま	み	む	め	も"} | ${"マ	ミ	ム	メ	モ"} | ${false}
        ${"や		ゆ		よ"}     | ${"ヤ		ユ		ヨ"}     | ${false}
        ${"ら	り	る	れ	ろ"} | ${"ラ	リ	ル	レ	ロ"} | ${false}
        ${"わ	ゐ		ゑ	を"}   | ${"ワ	ヰ		ヱ	ヲ"}   | ${false}
        ${"ん"}         | ${"ン"}         | ${false}
      `("converts $hiragana -> $katakana", ({ hiragana, katakana, option }) => {
        expect(hiraKana(hiragana, option)).toEqual(katakana);
      });
    });

    describe("Diacritics (dakuon and han-dakuon)", () => {
      // dakuten/dakuon
      test.each`
        hiragana        | katakana        | option
        ${"が	ぎ	ぐ	げ	ご"} | ${"ガ	ギ	グ	ゲ	ゴ"} | ${false}
        ${"ざ	じ	ず	ぜ	ぞ"} | ${"ザ	ジ	ズ	ゼ	ゾ"} | ${false}
        ${"だ	ぢ	づ	で	ど"} | ${"ダ	ヂ	ヅ	デ	ド"} | ${false}
        ${"ば	び	ぶ	べ	ぼ"} | ${"バ	ビ	ブ	ベ	ボ"} | ${false}
      `("converts $hiragana -> $katakana", ({ hiragana, katakana, option }) => {
        expect(hiraKana(hiragana, option)).toEqual(katakana);
      });

      // handakuten/han-dakuon
      test.each`
        hiragana        | katakana        | option
        ${"ぱ	ぴ	ぷ	ぺ	ぽ"} | ${"パ	ピ	プ	ペ	ポ"} | ${false}
      `("converts $hiragana -> $katakana", ({ hiragana, katakana, option }) => {
        expect(hiraKana(hiragana, option)).toEqual(katakana);
      });
    });
  });

  describe("Digraphs/Contractions (yōon)", () => {
    describe("short contrations", () => {
      describe("non dakuten", () => {
        test.each`
          hiragana          | katakana          | option
          ${"きゃ	きゅ	きょ"} | ${"キャ	キュ	キョ"} | ${false}
          ${"しゃ	しゅ	しょ"} | ${"シャ	シュ	ショ"} | ${false}
          ${"ちゃ	ちゅ	ちょ"} | ${"チャ	チュ	チョ"} | ${false}
          ${"にゃ	にゅ	にょ"} | ${"ニャ	ニュ	ニョ"} | ${false}
          ${"ひゃ	ひゅ	ひょ"} | ${"ヒャ	ヒュ	ヒョ"} | ${false}
          ${"みゃ	みゅ	みょ"} | ${"ミャ	ミュ	ミョ"} | ${false}
          ${"りゃ	りゅ	りょ"} | ${"リャ	リュ	リョ"} | ${false}
        `(
          "converts $hiragana -> $katakana",
          ({ hiragana, katakana, option }) => {
            expect(hiraKana(hiragana, option)).toEqual(katakana);
          }
        );
      });

      describe("dakuten", () => {
        test.each`
          hiragana          | katakana          | option
          ${"ぎゃ	ぎゅ	ぎょ"} | ${"ギャ	ギュ	ギョ"} | ${false}
          ${"じゃ	じゅ	じょ"} | ${"ジャ	ジュ	ジョ"} | ${false}
          ${"びゃ	びゅ	びょ"} | ${"ビャ	ビュ	ビョ"} | ${false}
          ${"ぴゃ	ぴゅ	ぴょ"} | ${"ピャ	ピュ	ピョ"} | ${false}
        `(
          "converts $hiragana -> $katakana",
          ({ hiragana, katakana, option }) => {
            expect(hiraKana(hiragana, option)).toEqual(katakana);
          }
        );
      });
    });

    describe("long contrations", () => {
      describe("non dakuten", () => {
        test.each`
          hiragana          | katakana          | option
          ${"きゅう	きょう"} | ${"キュウ	キョウ"} | ${false}
          ${"しゅう	しょう"} | ${"シュウ	ショウ"} | ${false}
          ${"ちゅう	ちょう"} | ${"チュウ	チョウ"} | ${false}
          ${"にゅう	にょう"} | ${"ニュウ	ニョウ"} | ${false}
          ${"ひゅう	ひょう"} | ${"ヒュウ	ヒョウ"} | ${false}
          ${"みゅう	みょう"} | ${"ミュウ	ミョウ"} | ${false}
          ${"りゅう	りょう"} | ${"リュウ	リョウ"} | ${false}
        `(
          "converts $hiragana -> $katakana",
          ({ hiragana, katakana, option }) => {
            expect(hiraKana(hiragana, option)).toEqual(katakana);
          }
        );
      });

      describe("dakuten", () => {
        test.each`
          hiragana          | katakana          | option
          ${"ぎゅう	ぎょう"} | ${"ギュウ	ギョウ"} | ${false}
          ${"じゅう	じょう"} | ${"ジュウ	ジョウ"} | ${false}
          ${"びゅう	びょう"} | ${"ビュウ	ビョウ"} | ${false}
          ${"ぴゅう	ぴょう"} | ${"ピュウ	ピョウ"} | ${false}
        `(
          "converts $hiragana -> $katakana",
          ({ hiragana, katakana, option }) => {
            expect(hiraKana(hiragana, option)).toEqual(katakana);
          }
        );
      });
    });
  });

  describe("half-sized and small tsu", () => {
    test.each`
      hiragana        | katakana        | option
      ${"ぁぃぅぇぉ"} | ${"ァィゥェォ"} | ${false}
      ${"っ"}         | ${"ッ"}         | ${false}
    `("converts $hiragana -> $katakana", ({ hiragana, katakana, option }) => {
      expect(hiraKana(hiragana, option)).toEqual(katakana);
    });
  });

  describe("with option set to true", () => {
    test.each`
      hiragana            | katakana            | option
      ${"あさひゕおか"}   | ${"アサヒヵオカ"}   | ${true}
      ${"いちゖげつかん"} | ${"イチヶゲツカン"} | ${true}
    `("converts $hiragana -> $katakana", ({ hiragana, katakana, option }) => {
      expect(hiraKana(hiragana, option)).toEqual(katakana);
    });
  });
});
