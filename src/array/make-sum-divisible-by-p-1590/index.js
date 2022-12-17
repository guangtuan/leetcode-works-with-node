/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 *
 * sum(n+1) = sum(n) + array(n + 1)
 */
var minSubarray = function (nums, p) {
    let sum = 0
    const f = []
    for (let n of nums) {
        sum = n + sum
        f.push(n)
    }
    if (sum < p) {
        return -1
    }
    if (sum % p === 0) {
        return 0
    }
    const remain = sum % p
    const maxWorkLength = nums.length
    for (
        let workingLength = 1;
        workingLength < maxWorkLength;
        workingLength++
    ) {
        for (let i = 0; i <= nums.length - workingLength; i++) {
            if (f[i] % p === remain) {
                return workingLength
            }
            if (i + workingLength < nums.length) {
                f[i] = f[i] + nums[i + workingLength]
            }
        }
    }
    return -1
}

module.exports = minSubarray
