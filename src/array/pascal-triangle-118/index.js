/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const last = array => {
        if (array && array.length > 0) {
            return array[array.length - 1];
        }
    };
    const head = array => {
        if (array && array.length > 0) {
            return array[0];
        }
    };
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const pre = last(result);
        const append = [];
        if (pre === undefined) {
            append.push(1);
        } else {
            append.push(head(pre));
            for (let j = 0; j < pre.length - 1; j++) {
                append.push(pre[j] + pre[j + 1]);
            }
            append.push(last(pre));
        }
        result.push(append);
    }
    return result;
};

module.exports = generate;