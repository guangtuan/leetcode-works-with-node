const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: [[1, 2], [2, 1], [3, 4], [5, 6]],
        output: 1
    },
    {
        input: [[1, 2], [2, 1], [1, 2], [3, 4], [5, 6]],
        output: 3
    },
    {
        input: [[1, 2], [2, 1], [1, 2], [3, 4], [4, 3]],
        output: 4
    }
];

describe("#1128. Number of Equivalent Domino Pairs", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output);
        });
    });
});
