/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.inner = [0]
    for (let i = 1; i <= nums.length; i++) {
        this.inner[i] = this.inner[i - 1] + nums[i - 1]
    }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.inner[right + 1] - this.inner[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

module.exports = NumArray
