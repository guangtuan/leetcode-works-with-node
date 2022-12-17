/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let m1 = nums1.reduce((acc, curr) => {
        acc[curr] = 1
        return acc
    }, {})
    let m2 = nums2.reduce((acc, curr) => {
        acc[curr] = 1
        return acc
    }, {})
    let answer1 = {}
    for (let num of nums1) {
        if (!(num in m2)) {
            answer1[num] = 1
        }
    }
    let answer2 = {}
    for (let num of nums2) {
        if (!(num in m1)) {
            answer2[num] = 1
        }
    }
    return [
        Object.keys(answer1).map((s) => Number.parseInt(s)),
        Object.keys(answer2).map((s) => Number.parseInt(s)),
    ]
}

module.exports = findDifference
