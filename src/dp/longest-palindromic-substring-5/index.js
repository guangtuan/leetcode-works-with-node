/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    function walk(l, r, s, holder) {
        while (l >= 0 && r <= s.length && s.charAt(l) === s.charAt(r)) {
            if (r - l + 1 > holder.len) {
                holder.res = s.substr(l, r - l + 1)
                holder.len = r - l + 1
            }
            l = l - 1
            r = r + 1
        }
        return holder
    }
    const holder = {
        res: '',
        len: 0,
    }
    for (let idx = 0; idx <= s.length; idx++) {
        walk(idx, idx, s, holder)
        walk(idx, idx + 1, s, holder)
    }
    return holder.res
}

module.exports = longestPalindrome
