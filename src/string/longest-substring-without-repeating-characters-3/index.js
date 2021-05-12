/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
    }
    let a = 0;
    let b = 0;
    let ret = b - a;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        let l = s[i];
        if (l in map) {
            ret = Math.max(ret, b - a);
            let toDelRange = map[l];
            for (let [letter, p] of Object.entries(map)) {
                if (p <= toDelRange) {
                    delete map[letter];
                }
            }
            a = toDelRange + 1;
        }
        b = b + 1;
        map[l] = i;
    }
    ret = Math.max(ret, b - a);
    return ret;
};

module.exports = lengthOfLongestSubstring;