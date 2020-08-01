/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let filled = Array(100).fill(0);
    for (let num of nums) {
        filled[num] ++;
    }
    return filled.filter(ele => ele > 1).map((val) => val * (val - 1) / 2).reduce((acc, curr) => acc + curr, 0);
};

module.exports = numIdenticalPairs;