/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums
        .sort((a, b) => a - b)
        .reduce((acc, currentValue, currentIndex) => {
            if (currentIndex % 2 === 0) {
                return acc + currentValue;
            } else {
                return acc;
            }
        }, 0);
};

module.exports = arrayPairSum;