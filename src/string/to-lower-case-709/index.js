/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    const A = 'A'.charCodeAt(0)
    const Z = 'Z'.charCodeAt(0)
    const a = 'a'.charCodeAt(0)
    const delta = A - a
    const convert = (singleChar) => {
        const c = singleChar.charCodeAt(0)
        if (c <= Z && c >= A) {
            return String.fromCharCode(c - delta)
        }
        return singleChar
    }
    return str.split('').map(convert).join('')
}

module.exports = toLowerCase
