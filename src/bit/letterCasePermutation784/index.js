/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    const array = S.split('');
    const letterArray = array.filter(isNaN);
    if (0 === letterArray.length) {
        return [S];
    }
    const convertToBits = ({ number, length }) => {
        const effectiveBits = (number).toString('2');
        return Array(length - effectiveBits.length).fill('0').concat(...effectiveBits);
    };
    const resultCount = Math.pow(2, letterArray.length);
    const totalResult = [];
    const ifCharIsLetter = array.reduce((acc, currentChar) => Object.assign({
        [currentChar]: isNaN(currentChar)
    }, acc), {});
    for (let i = 0; i < resultCount; i++) {
        const currentResult = [];
        const bits = convertToBits({
            number: i,
            length: letterArray.length
        });
        for (let j = 0; j < array.length; j++) {
            if (ifCharIsLetter[array[j]]) {
                if (bits.shift() === '1') {
                    currentResult.push(array[j].toUpperCase());
                } else {
                    currentResult.push(array[j].toLowerCase());
                }
            } else {
                currentResult.push(array[j]);
            }
        }
        totalResult.push(currentResult.join(''));
    }
    return totalResult;
};

module.exports = letterCasePermutation;