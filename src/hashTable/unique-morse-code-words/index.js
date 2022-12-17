/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const dict = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..',
    ]

    let basic = 'a'.charCodeAt(0)

    const translate = (word) =>
        word
            .split('')
            .map((c) => c.charCodeAt(0) - basic)
            .map((index) => dict[index])
            .join('')

    return words
        .map(translate)
        .reduce((acc, val) => !acc.add(val) || acc, new Set()).size
}

module.exports = uniqueMorseRepresentations
