/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */

var kthPalindrome = function (queries, intLength) {
    const parseNumber = (number) => {
        if (number === 0) {
            return [0]
        }
        let len = Math.floor(Math.log10(number))
        let remain = number
        let ret = []
        while (len >= 0) {
            let divider = Math.pow(10, len)
            let curr = Math.floor(remain / divider)
            remain = remain - curr * divider
            ret.push(curr)
            len--
        }
        return ret
    }
    const nth = ({ intLength, n }) => {
        let nums = []
        // 从中间开始
        let parsed = parseNumber(n)
        let middle = Math.floor(intLength / 2)
        let left = middle - 1
        let right = middle + (intLength % 2)
        if (right - left === 2) {
            nums[middle] = parsed.pop() || 0
        }
        while (left >= 0 && right < intLength) {
            let curr = parsed.pop() || 0
            nums[left] = curr
            nums[right] = curr
            left -= 1
            right += 1
        }
        nums[0] = nums[0] + 1
        if (intLength !== 1) {
            nums[nums.length - 1] = nums[nums.length - 1] + 1
        }
        return nums
            .map(
                (value, index, array) =>
                    value * Math.pow(10, array.length - index - 1),
            )
            .reduce((acc, curr) => acc + curr, 0)
    }
    const max = 9 * Math.pow(10, Math.floor((intLength - 1) / 2))
    return queries
        .map((q) => q - 1)
        .map((q) => {
            if (q >= max) {
                return -1
            }
            return nth({ intLength, n: q })
        })
}

module.exports = kthPalindrome
