/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    const pos = new Set(nums.filter((i) => i >= 0))
    const neg = nums.filter((i) => i < 0).sort((n1, n2) => n1 - n2)
    for (let ele of neg) {
        if (pos.has(-1 * ele)) {
            return -1 * ele
        }
    }
    return -1
}

module.exports = findMaxK
