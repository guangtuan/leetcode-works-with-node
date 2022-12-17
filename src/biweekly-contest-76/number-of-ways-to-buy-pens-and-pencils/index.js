/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
    if (cost1 > total && cost2 > total) {
        return 1
    }
    // total = x * cost1 + y * cost2
    // x = (total - (y * cost2)) / cost1
    // y = (total - (x * cost1)) / cost2
    // 10 2 5
    // 2 5
    // 0 -012
    // 1 -01
    // 2 -01
    // 3 -0
    // 4 -0
    // 5 -0
    let use = []
    if (cost1 < cost2) {
        use = [cost1, cost2]
    } else {
        use = [cost2, cost1]
    }
    const [a, b] = use
    let max1 = Math.floor(total / b)
    let ans = 0
    for (let buy1 = 0; buy1 <= max1; buy1++) {
        let buy2 = Math.floor((total - buy1 * b) / a)
        ans += buy2 + 1
    }
    return ans
}

module.exports = waysToBuyPensPencils
