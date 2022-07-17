/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    const top2Array = () => {
        let first = -Infinity;
        let second = -Infinity;
        return {
            sum: () => first + second,
            insert: num => {
                if (num >= first) {
                    second = first;
                    first = num;
                } else {
                    if (num >= second) {
                        second = num;
                    }
                }
            }
        }
    }

    const numberBitSum = numberStr => numberStr
        .toString()
        .split("")
        .map(str => Number.parseInt(str))
        .reduce((acc, curr) => acc + curr, 0)

    const st = nums.reduce(
        (acc, curr) => {
            const bitSum = numberBitSum(curr)
            acc[bitSum] = acc[bitSum] || top2Array()
            acc[bitSum].insert(curr);
            return acc;
        },
        {}
    );
    return Math.max(...[...Object.values(st), {sum: () => -1}].map(stResult => stResult.sum()));
};

module.exports = maximumSum;