/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    const sum = candies.reduce((acc, currValue) => acc + currValue, 0);
    if (sum < k) {
        return 0;
    }
    let left = 1;
    let right = sum;
    const match = (middle, candies, k) => {
        for (let i = 0; i <= candies.length; i++) {
            let costCount = Math.floor(candies[i] / middle);
            k = k - costCount;
            if (k <= 0) {
                return true;
            }
        }
        return false;
    }
    let an = 0;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        let matched = match(middle, candies, k);
        if (matched) {
            an = middle;
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return an;
};

module.exports = maximumCandies;