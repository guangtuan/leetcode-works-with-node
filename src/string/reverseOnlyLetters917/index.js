/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    const isLetter = (code) =>
        (65 <= code && code <= 90) || (97 <= code && code <= 122)
    const letterIndexes = S.split('')
        .map((item) => item.charCodeAt(0))
        .map((item, index) => (isLetter(item) ? index : null))
        .filter((item) => item !== null)
    while (letterIndexes.length) {
        const a = letterIndexes.pop()
        const b = letterIndexes.shift()
        S = swap(S, a, b)
    }
    return S
}

const swap = (S, aIndex, bIndex) => {
    if (aIndex === undefined || bIndex === undefined) {
        return S
    }
    const tmpArray = S.split('')
    const tmp = tmpArray[aIndex]
    tmpArray[aIndex] = tmpArray[bIndex]
    tmpArray[bIndex] = tmp
    return tmpArray.join('')
}

module.exports = reverseOnlyLetters
