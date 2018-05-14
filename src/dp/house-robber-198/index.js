/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let prePre = nums[0];
  if (nums.length === 1) {
    return prePre;
  }
  let pre = Math.max(nums[0], nums[1]);
  if (nums.length === 2) {
    return pre;
  }
  let result;
  for (let i = 2; i < nums.length; i++) {
    result = Math.max(pre, prePre + nums[i]);
    prePre = pre;
    pre = result;
  }
  return result;
};

module.exports = rob;