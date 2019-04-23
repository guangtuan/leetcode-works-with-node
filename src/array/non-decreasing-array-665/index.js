/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    if (nums.length === 1) {
        return true;
    }
    function preAndPostNot(i, j, nums) {
        let preNot, postNot;
        if (i - 1 >= 0) {
            if (nums[j] - nums[i - 1] <= 0) {
                preNot = true;
            }
        }
        if (j + 1 < nums.length) {
            if (nums[j + 1] - nums[i] <= 0) {
                postNot = true;
            }
        }
        return preNot && postNot;
    }
    let i = 0;
    let j = i + 1;
    let modified = false;
    while (j < nums.length) {
        if (nums[i] > nums[j]) {
            if (modified) {
                return false;
            }
            if (preAndPostNot(i, j, nums)) {
                return false;
            }
            modified = true;
        }
        i++;
        j++;
    }
    return true;
};

module.exports = checkPossibility;