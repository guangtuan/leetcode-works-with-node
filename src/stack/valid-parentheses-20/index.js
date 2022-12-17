/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = {
        '[': ']',
        '{': '}',
        '(': ')',
    }
    const stack = []
    for (const current of s) {
        if (map[current]) {
            stack.push(current)
            continue
        }
        if (map[stack[stack.length - 1]] === current) {
            stack.pop()
            continue
        }
        return false
    }
    return stack.length === 0
}

module.exports = isValid
