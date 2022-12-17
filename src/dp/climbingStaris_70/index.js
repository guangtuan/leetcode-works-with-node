/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const results = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        results[i] = results[i - 1] + results[i - 2]
    }
    return results[n]
}

module.exports = climbStairs
