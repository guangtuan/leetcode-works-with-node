const testCases = [
    {
        input: 5,
        output: [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ]
    },
    {
        input: 1,
        output: [
            [1]
        ]
    },
    {
        input: 0,
        output: []
    },
    {
        input: 6,
        output: [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1]
        ]
    }
];

const assert = require('assert');
const resolve = require('./index');

describe("#118. Pascal's Triangle", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${JSON.stringify(output)}`, () => {
            assert.deepEqual(resolve(input), output);
        });
    });
});