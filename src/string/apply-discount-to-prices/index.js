/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
    const isNotDigit = (c) => c < '0' || c > '9'
    const getValue = (c) => c - '0'
    const convert = (str) => {
        if (str.length === 1) {
            return str
        }
        let ret = 0
        for (let i = 0; i < str.length; i++) {
            const c = str.charAt(i)
            if (i === 0) {
                if (c !== '$') {
                    return str
                }
            } else {
                if (isNotDigit(c)) {
                    return str
                } else {
                    ret += 10 ** (str.length - i - 1) * getValue(c)
                }
            }
        }
        return '$' + (ret - (ret * discount) / 100).toFixed(2)
    }
    return sentence.split(' ').map(convert).join(' ')
}

module.exports = discountPrices
