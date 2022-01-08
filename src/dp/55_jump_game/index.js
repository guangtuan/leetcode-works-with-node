var canJump = function (nums) {
    const remainStepNumbers = []
    remainStepNumbers[0] = nums[0]
    if (nums[0] === 0 && nums.length > 1) {
        return false
    }
    for (let i = 1; i < nums.length; i++) {
        // 余下的步数 = 前面一步余下的步数 - 1 || 当前位置的数字
        remainStepNumbers[i] = Math.max(remainStepNumbers[i - 1] - 1, nums[i])
        let reachedEnd = i !== nums.length - 1;
        if (remainStepNumbers[i] === 0 && reachedEnd) {
            return false;
        }
    }
    return true;
};

module.exports = canJump;