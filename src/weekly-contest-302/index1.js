/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const st = {}
    for (let num of nums) {
        if (st[num]) {
            st[num] = st[num] + 1;
        } else {
            st[num] = 1;
        }
    }
    const re1 = Object.entries(st)
        .map(e => {
            return Math.floor(e[1] / 2);
        })
        .reduce((acc, prev) => acc + prev, 0);
    return [re1, nums.length - re1 * 2];
};

module.exports = numberOfPairs;