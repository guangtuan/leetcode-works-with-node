/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = {}
    for (let c of s) {
        map[c] = (map[c] || 0) + 1
    }
    let pairs = Object.entries(map).sort(
        ([charA, countA], [charB, countB]) => countB - countA,
    )
    let result = ''
    for (let [char, count] of pairs) {
        result = result + char.repeat(count)
    }
    return result
}

module.exports = frequencySort
