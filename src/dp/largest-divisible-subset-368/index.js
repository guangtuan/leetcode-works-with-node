
var largestDivisibleSubset = function(nums) {
    const ok = n => [].concat(result(n)).pop() % nums[n] === 0 || arr[n] % [].concat(result(n)).pop() === 0;
    const result = n => {
        if (n === 0) {
            return [];
        }
        if (ok(n)) {
            return [].concat(result(n - 1)).concat(nums[n]);
        } else {
            return result(n - 1);
        }
    }
    return result(nums.length - 1);
};

module.exports = largestDivisibleSubset;