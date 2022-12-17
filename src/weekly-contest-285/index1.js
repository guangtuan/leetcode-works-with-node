/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    const FLAG_DOWN = 'flagDown'
    const FLAG_UP = 'flagUp'
    let f1 = ''
    let f2 = ''
    let ret = 0
    for (let p1 = 0, p2 = 1; p2 < nums.length; p1++, p2++) {
        if (nums[p1] < nums[p2]) {
            f1 = f2
            f2 = FLAG_UP
        } else if (nums[p1] > nums[p2]) {
            f1 = f2
            f2 = FLAG_DOWN
        } else {
            // do nothing
            continue
        }
        if (f1 === FLAG_UP && f2 === FLAG_DOWN) {
            ret = ret + 1
        } else if (f1 === FLAG_DOWN && f2 === FLAG_UP) {
            ret = ret + 1
        }
    }
    return ret
}

module.exports = countHillValley
