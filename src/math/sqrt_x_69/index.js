/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    for (let i = 0; i <= x; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            return i
        }
    }
}

mySqrt = function (x) {
    const result = Math.sqrt(x)
    return Math.floor(result)
}

module.exports = mySqrt
