
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans = [];
    const getAnswer = num => {
        for (let i = -1; i <= num; i++) {
            if (((i) | (i + 1)) == num) {
                return i;
            }
        }
        return -1;
    }
    for (let num of nums) {
        ans.push(getAnswer(num));
    }
    return ans;
};

module.exports = minBitwiseArray;