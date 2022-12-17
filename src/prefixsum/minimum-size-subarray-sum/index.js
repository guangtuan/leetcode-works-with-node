/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const sum = [0]
    for (let i = 1; i <= nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i - 1]
    }
    if (sum[nums.length] < target) {
        return 0
    }
    const findBack = (sum, start) => {
        let back = start
        while (true) {
            if (sum[start] - sum[back] >= target) {
                return back
            } else {
                back = back - 1
            }
            if (back === 0) {
                return back
            }
        }
    }
    let min = Number.MAX_VALUE
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] >= target) {
            let back = findBack(sum, i)
            min = Math.min(min, i - back)
        }
    }
    return min
}

module.exports = minSubArrayLen
