function isZeroArray(nums: number[], queries: number[][]): boolean {
    const diff = Array(nums.length + 1).fill(0)
    for (let [l, r] of queries) {
        diff[l] += 1
        diff[r + 1] -= 1
    }
    let sumD = 0
    for (let i = 0; i < nums.length; i++) {
        sumD += diff[i]
        if (nums[i] > sumD) {
            return false
        }
    }
    return true
}

module.exports = isZeroArray
