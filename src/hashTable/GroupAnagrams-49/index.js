/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    return Object.values(
        strs.reduce((acc, curr) => {
            const sortedCurr = curr.split('').sort()
            if (acc[sortedCurr]) {
                acc[sortedCurr].push(curr)
            } else {
                acc[sortedCurr] = [curr]
            }
            return acc
        }, {}),
    ).map((childArray) => childArray.sort())
}

module.exports = groupAnagrams
