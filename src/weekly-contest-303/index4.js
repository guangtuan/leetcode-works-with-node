/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function (nums, k) {
    function getCountOfBitWithIs1(v) {
        let res = 0
        while (v) {
            if ((1 & v) == 1) res++
            v >>= 1
        }
        return res
    }
    let set = new Set(nums);
    let st = Array(30).fill(0);
    set.forEach(v => {
        st[getCountOfBitWithIs1(v)] += 1;
    });
    let ret = 0;
    for (let i = 0; i < st.length; i++) {
        for (let j = 0; j < st.length; j++) {
            if (i + j >= k) {
                ret += st[i] * st[j];
            }
        }
    }
    return ret;
};

module.exports = countExcellentPairs;