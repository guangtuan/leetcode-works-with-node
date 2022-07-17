/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    function strToArray(num) {
        return (num + "").split("").map(str => Number.parseInt(str)).reverse();
    }

    const inputs = nums.map(strToArray);
    const ret = [];

    function extracted(ele1, ele2) {
        for (let i = 0; i < ele1.value.length; i++) {
            let val1 = ele1.value[i];
            let val2 = ele2.value[i];
            if (val1 !== val2) {
                return val1 - val2;
            }
        }
        return 0;
    }

    for (let query of queries) {
        let [arrange, position] = query;
        const withIndex = inputs.map((input, index) => {
            const cut = input.slice(0, position);
            return {
                value: cut.reverse(),
                index
            }
        });
        withIndex.sort((ele1, ele2) => extracted(ele1, ele2));
        ret.push(withIndex[arrange- 1].index);
    }
    return ret;
};

module.exports = smallestTrimmedNumbers;