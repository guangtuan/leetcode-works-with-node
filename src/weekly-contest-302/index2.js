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

    const numberBitSum = number => {
        let modify = number;
        let sum = 0;
        while (modify > 0) {
            sum += modify % 10;
            modify = Math.floor(modify / 10);
        }
        return sum;
    }

    const st = nums.reduce(
        (acc, curr) => {
            const bitSum = numberBitSum(curr)
            acc[bitSum] = acc[bitSum] || top2Array()
            acc[bitSum].insert(curr);
            return acc;
        },
        {}
    );
    return Math.max(...[
        -1,
        ...Object.values(st).map(stResult => stResult.sum())
    ]);
};

module.exports = maximumSum;