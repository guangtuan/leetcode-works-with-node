/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length) {
        return false;
    }
    const diffIndex = [];
    for (let i = 0; i < A.length; i++) {
        if (A.charCodeAt(i) ^ B.charCodeAt(i)) {
            diffIndex.push(i);
            if (diffIndex.length > 2) {
                return false;
            }
        }
    }
    if (diffIndex.length === 2) {
        return A[diffIndex[0]] === B[diffIndex[1]] && A[diffIndex[1]] === B[diffIndex[0]];
    }
    if (diffIndex.length === 0) {
        return A.split("").length !== new Set(A.split("")).size;
    }
    return false;
};

module.exports = buddyStrings;