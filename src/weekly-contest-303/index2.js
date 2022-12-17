/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // 收集横向的数列，存储到 map 里，如果第二次出现，则再来一次。
    // 计算两个 map 的交集，算乘积
    const stHor = grid.reduce((acc, curr) => {
        const joint = curr.join(',')
        acc[joint] = acc[joint] || 0
        acc[joint] += 1
        return acc
    }, {})
    const stVer = {}
    for (let i = 0; i < grid[0].length; i++) {
        let curr = []
        for (let j = 0; j < grid.length; j++) {
            curr.push(grid[j][i])
        }
        const joint = curr.join(',')
        stVer[joint] = stVer[joint] || 0
        stVer[joint] += 1
    }

    let ret = 0
    const horKeys = Object.keys(stHor)
    const verKeys = Object.keys(stVer)
    for (let key of horKeys) {
        if (verKeys.includes(key)) {
            ret += stHor[key] * stVer[key]
        }
    }
    return ret
}

module.exports = equalPairs
