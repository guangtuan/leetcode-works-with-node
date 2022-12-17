/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    return queries.map(
        ([k, trim]) =>
            nums
                .map((input, index) => ({ value: input.slice(-trim), index }))
                .sort((ele1, ele2) =>
                    ele1.value === ele2.value
                        ? 0
                        : ele1.value > ele2.value
                        ? 1
                        : -1,
                )[k - 1].index,
    )
}

module.exports = smallestTrimmedNumbers
