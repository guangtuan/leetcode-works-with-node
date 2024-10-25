/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    // ans = [idx is even, idx is odd]
    const ans = [0, 0]
    let i = 0
    while (n !== 0) {
        // 获取最低位
        ans[i] += n & 1
        // 向右移动
        n = n >> 1
        // 异或操作，让 i 在 0 和 1 之间变化
        i ^= 1
    }
    return ans
}

module.exports = evenOddBit
