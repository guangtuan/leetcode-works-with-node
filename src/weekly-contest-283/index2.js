/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
    nums.sort((n1, n2) => n1 - n2)
    const intersection = new Set()
    let cursor = k
    for (let num of nums) {
        if (num <= cursor) {
            if (!intersection.has(num)) {
                intersection.add(num)
                cursor = cursor + 1
            }
        }
    }
    const total = (n) => ((n + 1) * n) / 2
    const sum = total(cursor)
    const toRemove = [...intersection].reduce((acc, curr) => acc + curr, 0)
    return sum - toRemove
}

module.exports = minimalKSum
