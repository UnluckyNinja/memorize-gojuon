interface Kana {
  hiragana: string
  katakana: string
  romaji: string
}

const characters: { [key: string]: Kana[] } = {
  a: [
    {
      hiragana: 'あ',
      katakana: 'ア',
      romaji: 'a',
    },
    {
      hiragana: 'い',
      katakana: 'イ',
      romaji: 'i',
    },
    {
      hiragana: 'う',
      katakana: 'ウ',
      romaji: 'u',
    },
    {
      hiragana: 'え',
      katakana: 'エ',
      romaji: 'e',
    },
    {
      hiragana: 'お',
      katakana: 'オ',
      romaji: 'o',
    },
  ],
  k: [
    {
      hiragana: 'か',
      katakana: 'カ',
      romaji: 'ka',
    },
    {
      hiragana: 'き',
      katakana: 'キ',
      romaji: 'ki',
    },
    {
      hiragana: 'く',
      katakana: 'ク',
      romaji: 'ku',
    },
    {
      hiragana: 'け',
      katakana: 'ケ',
      romaji: 'ke',
    },
    {
      hiragana: 'こ',
      katakana: 'コ',
      romaji: 'ko',
    },
  ],
  s: [
    {
      hiragana: 'さ',
      katakana: 'サ',
      romaji: 'sa',
    },
    {
      hiragana: 'し',
      katakana: 'シ',
      romaji: 'shi',
    },
    {
      hiragana: 'す',
      katakana: 'ス',
      romaji: 'su',
    },
    {
      hiragana: 'せ',
      katakana: 'セ',
      romaji: 'se',
    },
    {
      hiragana: 'そ',
      katakana: 'ソ',
      romaji: 'so',
    },
  ],
  t: [
    {
      hiragana: 'た',
      katakana: 'タ',
      romaji: 'ta',
    },
    {
      hiragana: 'ち',
      katakana: 'チ',
      romaji: 'chi',
    },
    {
      hiragana: 'つ',
      katakana: 'ツ',
      romaji: 'tsu',
    },
    {
      hiragana: 'て',
      katakana: 'テ',
      romaji: 'te',
    },
    {
      hiragana: 'と',
      katakana: 'ト',
      romaji: 'to',
    },
  ],
  n: [
    {
      hiragana: 'な',
      katakana: 'ナ',
      romaji: 'na',
    },
    {
      hiragana: 'に',
      katakana: 'ニ',
      romaji: 'ni',
    },
    {
      hiragana: 'ぬ',
      katakana: 'ヌ',
      romaji: 'nu',
    },
    {
      hiragana: 'ね',
      katakana: 'ネ',
      romaji: 'ne',
    },
    {
      hiragana: 'の',
      katakana: 'ノ',
      romaji: 'no',
    },
  ],
  h: [
    {
      hiragana: 'は',
      katakana: 'ハ',
      romaji: 'ha',
    },
    {
      hiragana: 'ひ',
      katakana: 'ヒ',
      romaji: 'hi',
    },
    {
      hiragana: 'ふ',
      katakana: 'フ',
      romaji: 'fu',
    },
    {
      hiragana: 'へ',
      katakana: 'ヘ',
      romaji: 'he',
    },
    {
      hiragana: 'ほ',
      katakana: 'ホ',
      romaji: 'ho',
    },
  ],
  m: [
    {
      hiragana: 'ま',
      katakana: 'マ',
      romaji: 'ma',
    },
    {
      hiragana: 'み',
      katakana: 'ミ',
      romaji: 'mi',
    },
    {
      hiragana: 'む',
      katakana: 'ム',
      romaji: 'mu',
    },
    {
      hiragana: 'め',
      katakana: 'メ',
      romaji: 'me',
    },
    {
      hiragana: 'も',
      katakana: 'モ',
      romaji: 'mo',
    },
  ],
  y: [
    {
      hiragana: 'や',
      katakana: 'ヤ',
      romaji: 'ya',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: 'ゆ',
      katakana: 'ユ',
      romaji: 'yu',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: 'よ',
      katakana: 'ヨ',
      romaji: 'yo',
    },
  ],
  r: [
    {
      hiragana: 'ら',
      katakana: 'ラ',
      romaji: 'ra',
    },
    {
      hiragana: 'り',
      katakana: 'リ',
      romaji: 'ri',
    },
    {
      hiragana: 'る',
      katakana: 'ル',
      romaji: 'ru',
    },
    {
      hiragana: 'れ',
      katakana: 'レ',
      romaji: 're',
    },
    {
      hiragana: 'ろ',
      katakana: 'ロ',
      romaji: 'ro',
    },
  ],
  w: [
    {
      hiragana: 'わ',
      katakana: 'ワ',
      romaji: 'wa',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: 'を',
      katakana: 'ヲ',
      romaji: 'o',
    },
  ],
  nn: [
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: '',
      katakana: '',
      romaji: '',
    },
    {
      hiragana: 'ん',
      katakana: 'ン',
      romaji: 'n',
    },
  ],
}

export { characters }
export type { Kana }
