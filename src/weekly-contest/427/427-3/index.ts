function maxSubarraySum(nums: number[], k: number): number {
    let ans = -Infinity
    // 求出k的所有的范围内的倍数
    // 按照倍数做滑动窗口

    // nums[0,1]
    // nums[2,3]
    // nums[0,1,2,3]

    // nums[1,2]
    // nums[3,4]
    // nums[5,6]
    // nums[1,2,3,4]
    // nums[3,4,5,6]

    // nums.length / k * nums.length
    const n = nums.length
    const getWindowSizeList = (
        current: number,
        n: number,
        k: number,
    ): number[] => {
        if (current <= n) {
            return [...getWindowSizeList(current + k, n, k), current]
        } else {
            return []
        }
    }
    const windowSizeList = getWindowSizeList(k, n, k)
    const sliding = (windowSize: number, arr: number[]): number => {
        let res = -Infinity
        let sum = 0
        // windowSize = 3, i = 2
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
            if (i < windowSize - 1) {
                continue
            }
            res = Math.max(sum, res)
            sum -= arr[i - windowSize + 1]
        }
        return res
    }
    for (let windowSize of windowSizeList) {
        ans = Math.max(ans, sliding(windowSize, nums))
    }
    return ans
}

module.exports = maxSubarraySum
