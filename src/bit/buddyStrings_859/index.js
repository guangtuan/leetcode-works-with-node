/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length) {
        return false
    }
    if (A === B) {
        const st = {}
        for (let c of A) {
            if (st[c]) {
                return true
            } else {
                st[c] = true
            }
        }
    }
    const diffIndex = []
    for (let i = 0; i < A.length; i++) {
        if (A.charCodeAt(i) ^ B.charCodeAt(i)) {
            diffIndex.push(i)
            if (diffIndex.length > 2) {
                return false
            }
        }
    }
    if (diffIndex.length === 2) {
        return (
            A[diffIndex[0]] === B[diffIndex[1]] &&
            A[diffIndex[1]] === B[diffIndex[0]]
        )
    }
    return false
}

module.exports = buddyStrings
