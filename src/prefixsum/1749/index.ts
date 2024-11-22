function maxAbsoluteSum(nums: number[]): number {
    const prefixSum = [0]
    for (let i = 0; i < nums.length; i++) {
        prefixSum.push(prefixSum[i] + nums[i])
    }
    return Math.max(...prefixSum) - Math.min(...prefixSum)
}

module.exports = maxAbsoluteSum
