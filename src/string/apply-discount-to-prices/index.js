/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
    const isNotDigit = (c, idx, arr) => {
        return c < '0' || c > '9'
    }
    const convert = (str) => {
        if (!str.startsWith('$')) {
            return str
        }
        const suffix = str.substring(1)
        if (suffix.length === 0) {
            return str
        }
        if (suffix.split('').some(isNotDigit)) {
            return str
        }
        const p = Number.parseInt(suffix)
        return '$' + (p - (p * discount) / 100).toFixed(2)
    }
    return sentence.split(' ').map(convert).join(' ')
}

module.exports = discountPrices
