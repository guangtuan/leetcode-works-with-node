/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    function extractNum (str) {
        const num = str.replace(/[^0-9]/g, '');
        let letter = str.replace(num, '');
        return {
            num: parseInt(num),
            letter,
            letterNumber: parseToNumber(letter)
        }
    }

    const parseToNumber = str => {
        const each = str.split('');
        let ret = 0;
        for (let i = 0; i < each.length; i++) {
            ret = ret + each[i].charCodeAt(0) - "A".charCodeAt(0);
        }
        return ret;
    }

    const convertToLetter = number => {
        if (number === 0) {
            return "A";
        }
        let ret = "";
        let remain = number;
        while (remain > 0) {
            let result = number % 26;
            ret = ret + String.fromCharCode(result + "A".charCodeAt(0));
            remain = number - (Math.ceil(remain / 26) + 1) * result;
        }
        return ret;
    }

    let [startStr, endStr] = s.split(":");
    let start = extractNum(startStr);
    let end = extractNum(endStr);
    const deltaOfLetter = end.letterNumber - start.letterNumber;
    const ret = [];
    const convert = (number1End, delta2Value, deltaRange) => {
        let ret = [];
        let prefix = convertToLetter(number1End + delta2Value);
        for (let deltaRangeElement of deltaRange) {
            ret.push(`${prefix}${deltaRangeElement}`);
        }
        return ret;
    }
    const rangeOf = (start, end) => {
        let ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }
    for (let i = 0; i <= deltaOfLetter; i++) {
        ret.push(convert(start.letterNumber, i, rangeOf(start.num, end.num)));
    }
    return ret.flat();
};

module.exports = cellsInRange;