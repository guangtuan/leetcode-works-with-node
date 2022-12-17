/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    function combinationWith2(n) {
        return (n * (n - 1)) / 2
    }
    const hash = (num1, num2) => {
        if (num1 > num2) {
            return `${num1}-${num2}`
        } else {
            return `${num2}-${num1}`
        }
    }
    const st = {}
    for (let [num1, num2] of dominoes) {
        let hashValue = hash(num1, num2)
        if (st[hashValue]) {
            st[hashValue]++
        } else {
            st[hashValue] = 1
        }
    }
    return Object.values(st)
        .filter((val) => val > 1)
        .reduce((acc, curr) => acc + combinationWith2(curr), 0)
}

module.exports = numEquivDominoPairs
