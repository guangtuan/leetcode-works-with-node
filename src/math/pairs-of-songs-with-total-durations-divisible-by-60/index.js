/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let ret = 0;
    for (let index = 0; index < time.length; index++) {
        for (let index2 = index + 1; index2 < time.length; index2++) {
            if ((time[index] + time[index2]) % 60 === 0) {
                ret += 1;
            }
        }
    }
    return ret;
};

module.exports = numPairsDivisibleBy60;