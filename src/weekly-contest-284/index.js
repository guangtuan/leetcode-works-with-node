var findKDistantIndices = function (nums, key, k) {
    let index = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            index.push(i);
        }
    }
    let ret = [];
    function extracted(i) {
        for (let idx of index) {
            if (Math.abs(i - idx) <= k) {
                return i;
            }
        }
        return -1;
    }
    for (let i = 0; i < nums.length; i++) {
        let idx = extracted(i);
        if (idx === -1) {
            continue;
        }
        ret.push(idx);
    }
    return ret;
};

module.exports = findKDistantIndices;