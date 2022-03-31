/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const valid = number => {
        if (number < 10) {
            return true;
        }
        let len = Math.floor(Math.log10(number));
        let remain = number;
        while (len >= 0) {
            let divider = Math.pow(10, len);
            let curr = Math.floor(remain / divider);
            remain = remain - curr * divider;
            if (number % curr !== 0) {
                return false;
            }
            len--;
        }
        return true;
    }
    let ret = [];
    for (let i = left; i <= right; i++) {
        if (valid(i)) {
            ret.push(i);
        }
    }
    return Array((right - left + 1)).fill(null).map((val, index) => index + left).filter(i => valid(i));
};

module.exports = selfDividingNumbers;