/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
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
    const set1 = new Set();
    const set2 = new Set();
    for (let [key, num] of Object.entries(map1)) {
        for (let i = 0; i < num; i++) {
            set1.add(`${key}-${i}`);
        }
    }
    for (let [key, num] of Object.entries(map2)) {
        for (let i = 0; i < num; i++) {
            set2.add(`${key}-${i}`);
        }
    }
    let diff = 0;
    for (let i of set1) {
        if (!set2.has(i)) {
            diff = diff + 1;
        }
    }
    for (let i of set2) {
        if (!set1.has(i)) {
            diff = diff + 1;
        }
    }
    return diff;
};

module.exports = minSteps;