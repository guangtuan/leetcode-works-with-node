/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
    const occurrences = Array(51).fill(0).map(it => it);
    const xSum = (start, end) => {
        if (start === 0) {
            for (let i = 0; i <= end; i++) {
                const ele = nums[i];
                occurrences[ele] = occurrences[ele] + 1;
            }
        } else {
            occurrences[nums[start - 1]] = occurrences[nums[start - 1]] - 1;
            if (end != nums.length) {
                occurrences[nums[end]] = (occurrences[nums[end]] || 0) + 1;
            }
        }
        const sorted = occurrences
            .map((value, index, _array) => [index, value])
            .filter(arr => arr[1] !== 0)
            .sort((a, b) => (b[1] - a[1]) || (b[0] - a[0]));
        return sorted
            .slice(0, x)
            .reduce(
                (acc, currentValue) => acc + currentValue[0] * currentValue[1],
                0
            );
    };
    let subArrayCount = nums.length - k + 1;
    return Array(subArrayCount)
        .fill(undefined)
        .map((_value, index, _arr) => xSum(index, index + k - 1));
};

module.exports = findXSum;
