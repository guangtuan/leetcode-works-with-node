/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    const stack = []
    for (let c of S) {
        if (c === '(') {
            stack.push(c)
            continue
        }
        if (stack[stack.length - 1] === '(') {
            stack.pop()
            continue
        }
        stack.push(c)
    }
    return stack.length
}

module.exports = minAddToMakeValid
