/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) {
        return 0;
    }
    if (n == 2) {
        return 2;
    }
    let result = 0;
    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            result += i;
            n = n / i;
        } else {
            i = i + 1;
        }
    }
    return result;
};

module.exports = minSteps;