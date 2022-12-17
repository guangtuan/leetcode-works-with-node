/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {}
    let maxTime = 0
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        map[currentNum] = (map[currentNum] || 0) + 1
        maxTime = Math.max(maxTime, map[currentNum])
    }
    return parseInt(Object.keys(map).find((key) => map[key] === maxTime))
}

module.exports = majorityElement
