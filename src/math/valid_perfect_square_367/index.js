/**
 * @param {number} x
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1) {
        return true;
    }
    let x = Math.floor(num / 2);
    let t = x * x;
    while (t > num) {
        x = Math.floor(x / 2);
        t = x * x;
    }
    for (let i = x; i <= 2 * x; ++i) {
        if (i * i == num) {
            return true;
        }
    }
    return false;
};

module.exports = isPerfectSquare;