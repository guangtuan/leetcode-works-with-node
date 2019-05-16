/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = nums.pop();
    for (let num of nums) {
        result = result ^ num;
    }
    return result;
};

module.exports = singleNumber;