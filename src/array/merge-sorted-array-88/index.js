/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const result = [];
    let i = 0;
    let j = 0;
    nums1.length = m
    nums2.length = n
    // Limit part working in nums1 and nums2 by feature of Array in javaScript
    // result.length = m + n;
    while (i + j < m + n) {
        // There are 3 cases in loop:
        // 1. nums1 ends, add remaining part of nums2 to result
        // 2. nums2 ends, add remaining part of nums1 to result
        // 3. no array ends, add the smaller one to result
        if (i === m) {
            let remainNums2 = n - j;
            while (remainNums2 > 0) {
                result.push(nums2[n - remainNums2]);
                remainNums2--;
            }
            break;
        }
        if (j === n) {
            let remainNums1 = m - i;
            while (remainNums1 > 0) {
                result.push(nums1[m - remainNums1]);
                remainNums1--;
            }
            break;
        }
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    nums1.length = 0;
    result.forEach(ele => nums1.push(ele));
};

module.exports = merge;