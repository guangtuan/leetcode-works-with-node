/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    const basic = 'a'.charCodeAt(0)

    function getWidth(s) {
        return widths[s.charCodeAt(0) - basic]
    }

    const line = 100
    let arr = s.split('')
    const result = [1, 0]
    for (let ele of arr) {
        let w = getWidth(ele)
        if (line < result[1] + w) {
            result[0] = result[0] + 1
            result[1] = w
        } else {
            result[1] += w
        }
    }
    return result
}

module.exports = numberOfLines
