function constructTransformedArray(nums: number[]): number[] {
    const n = nums.length
    const getTargetIndex = (offset: number): number => {
        // -1
        if (offset < 0) {
            return getTargetIndex(n + offset)
        }
        if (offset > n - 1) {
            return offset % n
        }
        return offset
    }
    const result = Array(nums.length).fill(0)
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]
        if (value === 0) {
            result[i] = 0
        }
        result[i] = nums[getTargetIndex(i + value)]
    }
    return result
}

module.exports = constructTransformedArray
