const resolve = require('./index');
const assert = require('assert');

const objects = [
    [[4, 2, 3], 1, 5],
    [[3, -1, 0, 2], 3, 6],
    [[2, -3, -1, 5, -4], 2, 13],
    [[-8, 3, -5, -3, -5, -2], 6, 22],
    [[5, 6, 9, -3, 3], 2, 20],
    [[8, -7, -3, -9, 1, 9, -6, -9, 3], 8, 53]
];

describe("#1005. Maximize Sum Of Array After K Negations", () => {
    for (let object of objects) {
        it(JSON.stringify(object), () => {
            const A = object[0];
            const K = object[1];
            const expected = object[2];
            assert.equal(resolve(A, K), expected);
        });
    }
});