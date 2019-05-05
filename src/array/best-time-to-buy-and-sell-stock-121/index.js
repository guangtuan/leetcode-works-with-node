/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let a = 0;
    let b = a + 1;
    while (a < prices.length) {
        while (b < prices.length && prices[b] > prices[a]) {
            profit = Math.max(profit, prices[b] - prices[a]);
            b++;
        }
        a++;
        b = a + 1;
    }
    return profit;
};

module.exports = maxProfit;