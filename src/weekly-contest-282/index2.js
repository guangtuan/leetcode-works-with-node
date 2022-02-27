/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    console.log(s.length);
    console.log(t.length);
    const st = str => str.split("").reduce((acc, curr, currIndex, arr) => {
        if (curr in acc) {
            acc[curr] = acc[curr] + 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    const map1 = st(s);
    const map2 = st(t);
    console.log(JSON.stringify({ map1, map2 }));
    const commonKeys = [...Object.keys(map1), ...Object.keys(map2)];
    let num = 0;
    let diff = "";
    let diff2 = "";
    for (let key of commonKeys) {
        let number1 = map1[key] || 0;
        let number2 = map2[key] || 0;
        let add = Math.abs(number1 - number2);
        if (number1 > number2) {
            for (let i = 0; i < add; i++) {
                diff = diff + key;
            }
        } else {
            for (let i = 0; i < add; i++) {
                diff2 = diff2 + key;
            }
        }
        console.log(JSON.stringify({ key, number1, number2, add }));
        num = num + add;
    }
    console.log(JSON.stringify({ diff, diff2 }));
    console.log(diff.length);
    console.log(diff2.length);
    return num;
};

module.exports = minSteps;