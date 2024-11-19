function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    // const n = len(nums)
    // it has (n - 1) subArray with len=2
    const subArraySpecial = []
    for (let i = 0; i < nums.length - 1; i++) {
        subArraySpecial[i] = (nums[i] + nums[i + 1]) % 2 === 0 ? 1 : 0
    }
    // a[i] = 1 表示 [i, i+1] 不是特殊子数组
    // a[i] = 0 表示 [i, i+1]  是特殊子数组
    // 这样，[l,r-1]子数组的元素和 = 0 表示特殊子数组
    const sum: number[] = [0]
    // sum 表示了 increase，即 sum[i] != sum[i - 1] 的情况下，表示中间发生了变化
    for (let i = 0; i < subArraySpecial.length; i++) {
        sum.push(sum[i] + subArraySpecial[i])
    }
    return queries.map((query: number[]): boolean => {
        const [l, r] = query
        // 前缀和数组放了一个 前导的 0，因此这里的 r 不用 -1
        return sum[r] === sum[l]
    })
}

module.exports = isArraySpecial
