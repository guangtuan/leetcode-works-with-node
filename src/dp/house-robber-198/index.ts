/**
 * fn(i) = max(fn(i-1), fn(i-2)+nums[i])
 */
function rob(nums: number[]): number {
    const cache = Array(nums.length + 2).fill(0)

    nums.forEach((value: number, i: number) => {
        cache[i + 2] = Math.max(cache[i + 1], cache[i] + value)
    })

    return cache[cache.length - 1]
}

module.exports = rob
