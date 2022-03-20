/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {
    if (k === 0) {
        return nums[0];
    }
    let len = nums.length;
    if (len === 1) {
        if (k % 2 === 1) {
            return -1;
        }
    }
    if (k === 1) {
        return nums[1];
    }
    let max = Math.max(...nums.slice(0, k - 1));
    if (k < len) {
        max = Math.max(max, nums[k]);
    }
    return max;
};

module.exports = maximumTop;