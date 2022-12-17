/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let i = 0
    for (let word of words) {
        if (word.startsWith(pref)) {
            i++
        }
    }
    return i
}

module.exports = prefixCount
