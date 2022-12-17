/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
    // a + reverse(a) = num
    // 1. true == a < num / 2

    const max = Math.floor(num / 2)

    const eachBit = (number) => {
        if (number < 10) {
            return [number]
        }
        const mod = number % 10
        return [mod, ...eachBit(Math.floor(number / 10))]
    }
    const reverse = (() => {
        return (n) => {
            const bits = eachBit(n)
            let res = 0
            let len = bits.length - 1
            for (let i of bits) {
                res += 10 ** len * i
                len--
            }
            return res
        }
    })()

    const ok = (a) => a + reverse(a) === num
    for (let i = max; i <= num; i++) {
        if (ok(i)) {
            return true
        }
    }
    return false
}

module.exports = sumOfNumberAndReverse
