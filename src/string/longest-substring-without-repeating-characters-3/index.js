/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
    }
    let retValue = 0;
    let i = 0;
    let j = 1;
    let map = {};
    map[s.charAt(i)] = true;
    while ((i < s.length - retValue) && j < s.length) {
        if (map[s.charAt(j)]) {
            i = i + 1;
            j = i + 1;
            retValue = Math.max(Object.keys(map).length, retValue);
            map = {
                [s.charAt(i)]: true
            };
        } else {
            map[s.charAt(j)] = true;
            j = j + 1;
        }
    }
    retValue = Math.max(Object.keys(map).length, retValue);
    return retValue;
};

module.exports = lengthOfLongestSubstring;