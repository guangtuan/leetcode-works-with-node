/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const map = nums2.reduce((acc, num, currentIndex, array) => {
        if (currentIndex === array.length - 1) {
            return acc;
        }
        for (let i = currentIndex + 1; i < array.length + 1; i ++) {
            if (array[i] <= num) {
                continue;
            }
            acc[num] = array[i];
            break;
        }
        return acc;
    }, {});
    return nums1.map(num => map[num] || -1);
};

module.exports = nextGreaterElement;