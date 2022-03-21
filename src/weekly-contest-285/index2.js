/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
    let handle = directions.split('');
    let ret = 0;

    function backFind(prev) {
        while (prev >= 0) {
            if (handle[prev] === 'R') {
                ret = ret + 1;
                prev = prev - 1;
            } else {
                break;
            }
        }
    }

    for (let p1 = 0, p2 = 1; p2 < handle.length; p1++, p2++) {
        let curr = handle[p1];
        let next = handle[p2];
        if (curr === "R" && next === "L") {
            ret = ret + 2;
            handle[p2] = "S";
            backFind(p1 - 1);
        } else if (curr === "R" && next === "S") {
            ret = ret + 1;
            backFind(p1 - 1);
        } else if (curr === "S" && next === 'L') {
            ret = ret + 1;
            handle[p2] = "S";
        }
    }
    return ret;
};
module.exports = countCollisions;