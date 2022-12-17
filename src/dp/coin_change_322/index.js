/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const map = {}
    let fn = (n) => {
        if (n < 0) {
            return -1
        }
        if (n === 0) {
            return 0
        }
        if (map[n]) {
            return map[n]
        }
        let res = -1
        for (let coin of coins) {
            const got = fn(n - coin) + 1
            if (got === 0) {
                continue
            }
            if (res === -1) {
                res = got
            }
            if (res !== -1) {
                res = Math.min(res, got)
            }
        }
        map[n] = res
        return map[n]
    }
    return fn(amount)
}

module.exports = coinChange
