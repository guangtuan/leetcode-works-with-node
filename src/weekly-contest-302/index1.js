/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const st = nums.reduce((acc, curr) => Object.assign(acc, {[curr]: (acc[curr] || 0) + 1}), {});
    const re1 = Object.values(st)
        .map(e => Math.floor(e / 2))
        .reduce((acc, prev) => acc + prev, 0);
    return [re1, nums.length - re1 * 2];
};

module.exports = numberOfPairs;