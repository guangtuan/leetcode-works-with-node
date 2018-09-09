/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = {};
    nums1.forEach((num) => {
        map[num] = true;
    });
    let result = [];
    nums2.forEach((num) => {
        if (map[num]) {
            result.push(num);
            map[num] = false;
        }
    });
    return result;
};

module.exports = intersection;