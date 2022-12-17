/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    while (nums[nums[0]] != nums[0]) {
        ;[nums[nums[0]], nums[0]] = [nums[0], nums[nums[0]]]
    }
    return nums[0]
}

module.exports = findDuplicate
