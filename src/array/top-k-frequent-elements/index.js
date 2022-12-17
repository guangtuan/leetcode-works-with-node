/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = nums.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1
        return acc
    }, {})
    const buckets = []
    for (let [num, feq] of Object.entries(map)) {
        if (!buckets[feq]) {
            buckets[feq] = [num]
        } else {
            buckets[feq].push(num)
        }
    }
    const result = []
    while (result.length < k) {
        result.push(...(buckets.pop() || []))
    }
    return result
}

module.exports = topKFrequent
