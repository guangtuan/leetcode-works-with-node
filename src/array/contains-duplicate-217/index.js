/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let map = {}
    for (let num of nums) {
        if (map[num] !== undefined) {
            return true
        }
        map[num] = 'e'
    }
    return false
}

module.exports = containsDuplicate
