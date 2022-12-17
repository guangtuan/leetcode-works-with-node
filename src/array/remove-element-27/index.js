/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let matchNum = 0
    let swapNum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            matchNum++
            for (let j = i; j < nums.length; j++) {
                if (nums[j] !== val) {
                    let tmp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = tmp
                    swapNum++
                    break
                }
            }
        }
    }
    return nums.length - (matchNum - swapNum)
}

module.exports = removeElement
