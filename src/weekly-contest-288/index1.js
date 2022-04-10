/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let eachNumber = (num + "").split("").map(str => Number.parseInt(str));
    const oddIndex = {};
    const isOdd = n => n % 2 === 1;
    const oddVal = [];
    const evenVal = [];
    for (let i = 0; i < eachNumber.length; i++) {
        if (isOdd(eachNumber[i])) {
            oddIndex[i] = true;
            oddVal.push(eachNumber[i]);
        } else {
            evenVal.push(eachNumber[i]);
        }
    }
    const sortBy = (n1, n2) => n2 - n1;
    oddVal.sort(sortBy);
    evenVal.sort(sortBy);
    const ret = [];
    for (let i = 0; i < eachNumber.length; i++) {
        if (oddIndex[i]) {
            ret.push(oddVal.shift());
        } else {
            ret.push(evenVal.shift());
        }
    }
    let retVal = 0;
    for (let i = 0; i < ret.length; i++) {
        retVal += ret[i] * (10 ** (ret.length - 1 - i));
    }
    return retVal;
};

module.exports = largestInteger;