/**
 * fn(i) = max(fn(i-1), fn(i-2)+nums[i])
 */
function rob(nums: number[]): number {
    const f = Array(nums.length + 2).fill(0)

    nums.forEach((value: number, i: number) => {
        f[i + 2] = Math.max(f[i + 1], f[i] + value)
    })

    return f[f.length - 1]
}

module.exports = rob
