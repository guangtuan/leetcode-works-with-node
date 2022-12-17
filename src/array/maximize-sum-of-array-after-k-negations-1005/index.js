/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    // 分为 nArray 和 pArray
    // 当 A 内的负数数量
    //      大于 K：无脑按大小顺序 negative 负数
    //      等于 K：同上
    //      小于 K
    //            差是单数：找 nArray 和 pArray 中找一个最小的
    //            差是双数：将 nArray 全部 negative 即可
    let ret = 0
    let nArray = []
    let maxNegative = Number.MIN_SAFE_INTEGER
    let minPositive = Number.MAX_SAFE_INTEGER
    const sum = (acc, curr) => acc + curr
    const neg = (e) => -1 * e
    for (let ele of A) {
        if (ele >= 0) {
            ret += ele
            minPositive = Math.min(minPositive, ele)
        } else {
            nArray.push(ele)
            maxNegative = Math.max(maxNegative, ele)
        }
    }
    nArray = nArray.sort((a, b) => a - b)
    // K 小于或者等于负数的数量
    // K 大于负数的数量，多出的是双数
    if (K <= nArray.length || (K - nArray.length) % 2 === 0) {
        return (
            ret +
            nArray.slice(0, K).map(neg).reduce(sum, 0) +
            nArray.slice(K).reduce(sum, 0)
        )
    }
    // K 大于负数的数量，多出的是单数，负数待选的绝对值更大
    if (minPositive + maxNegative < 0) {
        if (maxNegative === Number.MIN_SAFE_INTEGER) {
            // 没有负数
            return ret - minPositive + -1 * minPositive
        } else {
            // 有负数
            return ret - minPositive * 2 + nArray.map(neg).reduce(sum, 0)
        }
    } else {
        // K 大于负数的数量，多出的是单数，正数待选的绝对值更大
        return ret + nArray.map(neg).reduce(sum, 0) + 2 * maxNegative
    }
}

module.exports = largestSumAfterKNegations
