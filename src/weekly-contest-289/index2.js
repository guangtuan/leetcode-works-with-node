/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    const st = tasks.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    const is2x3y = n => {
        let y = Math.floor(n / 3);
        while (true) {
            if ((n - y) % 2 === 0) {
                return {
                    x: (n - y * 3) / 2,
                    y: y
                }
            } else {
                y = y - 1;
            }
            if (y < 0) {
                return {fail: true};
            }
        }
    }
    let levels = Object.keys(st);
    let ret = 0;
    for (let level of levels) {
        let cal = is2x3y(st[level]);
        if (cal.fail) {
            return -1;
        }
        ret += cal.x + cal.y;
    }
    return ret;
};

module.exports = minimumRounds;