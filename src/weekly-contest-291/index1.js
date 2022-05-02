/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    const safeGet = (pos, str) => {
        let charAt = str.charAt(pos);
        if (charAt) {
            return Number.parseInt(charAt.toString());
        }
        return -1;
    }
    const compareBigNumber = (n1, n2) => {
        let len = n1.length;
        for (let i = 0; i < len; i++) {
            let curr1 = safeGet(i, n1);
            let curr2 = safeGet(i, n2);
            if (curr1 === curr2) {
                continue;
            }
            if (curr1 > curr2) {
                return n1;
            } else {
                return n2;
            }
        }
        return n2;
    }
    const positions = [];
    let input = digit.toString();
    for (let i = 0; i < number.length; i++) {
        let curr = number.charAt(i);
        if (curr === input) {
            positions.push(i);
        }
    }
    const removeChar = targetPosition => {
        return number.split("").map((value, index) => {
            if (index === targetPosition) {
                return undefined;
            } else {
                return value;
            }
        }).filter(val => val !== undefined).join("");
    }
    let toSelect = positions.map(p => removeChar(p));
    let ret = toSelect.pop();
    while (toSelect.length > 0) {
        let bit = toSelect.pop();
        ret = compareBigNumber(ret, bit);
    }
    return ret;
};

module.exports = removeDigit;