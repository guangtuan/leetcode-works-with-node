/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    const map = Array(60).fill(0);
    for (let i of time) {
        let remainder = i % 60;
        map[remainder] ++;
    }
    let ret = map[0] * (map[0] - 1) / 2;
    ret += (map[30]) * (map[30] - 1) / 2;
    for (let index = 1; index < 30; index++) {
        ret += map[index] * map[60 - index];
    }
    return ret;
};

module.exports = numPairsDivisibleBy60;