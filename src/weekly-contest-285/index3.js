/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function (numArrows, aliceArrows) {
    let product = []
    for (let i = 0; i < aliceArrows.length; i++) {
        let cost = aliceArrows[i] + 1
        product[i] = {
            cost,
            point: i,
        }
    }
    product.sort((p1, p2) => p1.point - p2.point)
    let dp = []
    for (let i = 0; i < product.length; i++) {
        let curr = []
        for (let j = 0; j <= numArrows; j++) {
            curr.push(0)
        }
        dp.push(curr)
    }
    for (let j = product[0].cost; j <= numArrows; j++) {
        dp[0][j] = product[0].point
    }
    for (let i = 1; i < product.length; i++) {
        for (let j = 0; j <= numArrows; j++) {
            if (j < product[i].cost) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j - product[i].cost] + product[i].point,
                    dp[i - 1][j],
                )
            }
        }
    }
    let p1 = dp.length - 1
    let p2 = numArrows
    let ret = []
    while (p2 > 0 && p1 > 0) {
        if (dp[p1][p2] !== dp[p1 - 1][p2]) {
            ret.unshift(p1)
            p2 = p2 - product[p1].cost
            p1 = p1 - 1
        } else {
            p1 = p1 - 1
        }
    }
    const numbers = aliceArrows.map((val, index) => {
        if (ret.includes(index)) {
            return val + 1
        } else {
            return 0
        }
    })
    const total = numbers.reduce((acc, curr) => acc + curr, 0)
    numbers[0] = numArrows - total
    return numbers
}

module.exports = maximumBobPoints
