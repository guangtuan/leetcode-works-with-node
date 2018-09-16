/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let maxDiff = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let a = words[i];
            let b = words[j];
            if (a.length * b.length > maxDiff && !cross(a, b)) {
                maxDiff = Math.max(maxDiff, a.length * b.length);
            }
        }
    }
    return maxDiff;
};

function cross(a, b) {
    const aArray = a.split("");
    const bArray = b.split("");
    for (let i of aArray) {
        for (let j of bArray) {
            if (i === j) {
                return true;
            }
        }
    }
};

module.exports = maxProduct;