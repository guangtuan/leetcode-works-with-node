/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    function compareNumberStr(numberStr1, numberStr2) {
        for (let i = 0; i < numberStr1.length; i++) {
            let val1 = numberStr1[i];
            let val2 = numberStr2[i];
            if (val1 !== val2) {
                return val1 - val2;
            }
        }
        return 0;
    }

    return queries.map(query => {
        let [arrange, position] = query;
        const withIndex = nums.map((input, index) => {
            const cut = input.substring(input.length - position, input.length);
            return {
                value: cut,
                index
            }
        });
        withIndex.sort((ele1, ele2) => compareNumberStr(ele1.value, ele2.value));
        return withIndex[arrange - 1].index;
    })
};

module.exports = smallestTrimmedNumbers;