/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const max = Math.max(nums)
    return nums.reduce((acc, num, currentIndex, array) => {
        if (num === max) {
            acc[currentIndex] = -1
            return acc
        }
        for (let i = currentIndex + 1; i < array.length + 1; i++) {
            if (array[i] > num) {
                acc[currentIndex] = array[i]
                return acc
            }
        }
        if (typeof acc[currentIndex] === 'undefined') {
            for (let j = 0; j < currentIndex; j++) {
                if (array[j] > num) {
                    acc[currentIndex] = array[j]
                    return acc
                }
            }
        }
        if (typeof acc[currentIndex] === 'undefined') {
            acc[currentIndex] = -1
        }
        return acc
    }, [])
}

module.exports = nextGreaterElements
