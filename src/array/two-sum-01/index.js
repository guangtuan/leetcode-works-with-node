/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (typeof map[num] !== 'undefined') {
            return [map[num], i]
        }
        map[target - num] = i
    }
    return []
}

module.exports = twoSum
