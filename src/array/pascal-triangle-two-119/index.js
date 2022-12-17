/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const result = [1]
    while (result.length <= rowIndex) {
        for (let j = result.length - 1; j >= 1; j--) {
            result[j] = result[j] + result[j - 1]
        }
        result.push(1)
    }
    return result
}

module.exports = getRow
