function maxDistinctElements(nums: number[], k: number): number {
    // min - k, max + k 为数字范围
    // 1,2,2,3,3,4, k = 2 [-1, 6]
    // 目标数组为 -1,0,1,2,3,4
    // 所以，可以规定一个期望值（O(1)) 每次 +1
    // 判断 1 |exp - num| <= k，如果是，返回 exp
    //     2 num > exp 的情况下，可以使用 num - k 作为结果替代 exp
    //     3 因为是从小到大，所以 num < exp 的情况下，无法加入

    // 当成功返回 exp，加入目标数组，并且更新 exp = exp + 1
    const sorted = nums.sort((a, b) => a - b)
    const max = sorted[sorted.length - 1] + k
    const getResult = (i: number, exp: number): number | null => {
        if (Math.abs(i - exp) <= k) {
            return exp
        }
        if (i < exp) {
            return null
        }
        return i - k
    }
    const ans: { cursor: number; cnt: number } = {
        cursor: sorted[0] - k,
        cnt: 1,
    }
    for (let i = 1; i < sorted.length; i++) {
        const curr = sorted[i]
        const exp = ans.cursor + 1
        // 超出范围，直接返回答案
        if (exp > max) {
            return ans.cnt
        }
        const result = getResult(curr, exp)
        if (result !== null) {
            ans.cursor = result
            ans.cnt += 1
        }
    }
    return ans.cnt
}

module.exports = maxDistinctElements
