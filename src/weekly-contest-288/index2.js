/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function (expression) {
    const [left, right] = expression.split("+");

    const cutLeftFrom = pos => str => {
        let ret1 = str.substring(0, pos);
        let ret2 = str.substring(pos);
        return [ret1, ret2];
    }

    const cutRightFrom = pos => str => {
        if (pos === 0 || pos === str.length) {
            return [str, ''];
        }
        let ret1 = str.substring(0, pos);
        let ret2 = str.substring(pos);
        return [ret1, ret2];
    }

    const safToNumber = str => {
        if (!str || str.length === 0) {
            return 1;
        }
        return Number.parseInt(str);
    }

    let min;
    let ret;
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
            let [l1, l2] = cutLeftFrom(i)(left);
            let [r1, r2] = cutRightFrom(j)(right);
            let exp = `${l1}(${l2}+${r1})${r2}`;
            if (!min) {
                min = safToNumber(l1) * (safToNumber(l2) + safToNumber(r1)) * safToNumber(r2);
            }
            let curr = safToNumber(l1) * (safToNumber(l2) + safToNumber(r1)) * safToNumber(r2);
            if (min >= curr) {
                ret = exp;
                min = curr;
            }
        }
    }
    return ret;
};

module.exports = minimizeResult;