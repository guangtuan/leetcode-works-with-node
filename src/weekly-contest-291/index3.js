/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
    const part = step => array => {
        let ret = [];
        for (let i = 0; i < array.length; i++) {
            let curr = [];
            for (let j = 0; j < step; j++) {
                let ele = array[i + j];
                if (ele === undefined) {
                    return ret;
                }
                curr.push(ele);
            }
            ret.push(curr);
        }
        return ret;
    }
    const subArray = array => {
        let ret = [];
        for (let step = 1; step <= array.length; step++) {
            let partWithStep = part(step);
            ret.push(...(partWithStep(array)));
        }
        return ret;
    }
    const sub = subArray(nums);

    const match = ({k, p}) => arr => arr.filter(ele => ele % p === 0).length <= k;
    const matchKP = match({k, p});
    const matchSubArray = sub.filter(matchKP);
    const set = {};
    const hash = arr => arr.join('-');
    return matchSubArray.filter(ele => {
        const hashVal = hash(ele);
        if (set[hashVal]) {
            return false;
        } else {
            set[hashVal] = true;
            return true;
        }
    }).length;
};


module.exports = countDistinct;