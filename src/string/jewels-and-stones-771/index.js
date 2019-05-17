/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const m = S.split("").reduce((acc, stone) => {
        acc[stone] = (acc[stone] || 0) + 1;
        return acc;
    }, {});
    let result = 0;
    J.split("").forEach(jewel => {
        if (m[jewel]) {
            result += m[jewel];
            m[jewel] = 0;
        }
    });
    return result;
};

module.exports = numJewelsInStones;