/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    const bits = (num >>> 0).toString(2);
    const result = [];
    for (let bit of bits) {
        result.push(bit === '1' ? '0' : '1');
    }
    return result.reduceRight((acc, currentValue, currentIndex, array) => acc + parseInt(currentValue) * Math.pow(2, array.length - 1 - currentIndex), 0);
};

module.exports = findComplement;