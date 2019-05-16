/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let negative = false;
    if (num < 0) {
        negative = true;
        num = num * -1;
    }
    const divide = ({ base, num }) => {
        let i = Math.floor(num / base);
        let remain = num - base * i;
        return { i, remain };
    };
    let count = 0;
    let compare = Math.pow(7, count);
    do {
        count++;
        compare = Math.pow(7, count);
    } while (num >= compare);
    let remain = num;
    let result = Array(count).fill(0);
    while (remain !== 0) {
        let ret = divide({
            num: remain,
            base: Math.pow(7, count - 1)
        });
        result[result.length - count] = ret.i;
        count--;
        remain = ret.remain;
    }
    if (negative) {
        result.unshift("-");
    }
    return result.join("");
};

module.exports = convertToBase7;