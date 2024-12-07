function getLargestOutlier(nums: number[]): number {
    /**
     * sum(所有数字) = 异常值 + 和 + 剩下的其他数字
     *
     * 去掉异常值以后，找一个数字 = (sum - 异常值) / 2
     *
     * 需要注意 异常值的出现次数
     */
    const m: Record<number, number> = nums.reduce(
        (acc: Record<number, number>, value: number) =>
            Object.assign(acc, { [value]: (acc[value] || 0) + 1 }),
        {},
    )
    const sum = nums.reduce((acc: number, value: number) => acc + value, 0)
    return nums.reduce((ans: number, exp: number) => {
        const target = (sum - exp) / 2
        const compare = exp === target ? 1 : 0
        if (m[target] > compare) {
            return Math.max(ans, exp)
        } else {
            return ans
        }
    }, -Infinity)
}

module.exports = getLargestOutlier
