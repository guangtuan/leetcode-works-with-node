const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: {
            matrix: [
                [1, 4, 7, 11, 15],
                [2, 5, 8, 12, 19],
                [3, 6, 9, 16, 22],
                [10, 13, 14, 17, 24],
                [18, 21, 23, 26, 30]
            ],
            target: 5
        },
        output: true
    },
    {
        input: {
            matrix: [
                [1, 4, 7, 11, 15],
                [2, 5, 8, 12, 19],
                [3, 6, 9, 16, 22],
                [10, 13, 14, 17, 24],
                [18, 21, 23, 26, 30]
            ],
            target: 20
        },
        output: false
    }
];

const run = ({ input, output }) => {
    assert.equal(resolve(input.matrix, input.target), output);
};

describe("search 2D matrix", () => {
    // testCases.forEach(run);
});