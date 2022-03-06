/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
    const ignore = new Set(nums);
    let result = 0;
    let number = 1;
    while (k > 0) {
        if (!ignore.has(number)) {
            result += number;
            k = k - 1;
        }
        number++;
    }
    return result;
};

module.exports = minimalKSum;