function numberOfPoints(nums: number[][]): number {
    const maxEnd = Math.max(...nums.map((it) => it[1]))
    const diff = Array(maxEnd + 2).fill(0)
    for (let [start, end] of nums) {
        // 上车点记录一个标记
        diff[start] += 1
        // 在 end 的下一站下车
        diff[end + 1] -= 1
    }
    let sumD = 0
    let ans = 0
    for (let d of diff) {
        // 按照标记，进行上车或者下车的动作
        sumD += d
        if (sumD > 0) {
            ans += 1
        }
    }
    return ans
}

module.exports = numberOfPoints
