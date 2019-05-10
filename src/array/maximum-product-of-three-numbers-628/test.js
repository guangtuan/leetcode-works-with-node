const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: [1, 2, 3],
        output: 6
    },
    {
        input: [1, 2, 4, 3, -1, -2],
        output: 24
    },
    {
        input: [1000, 1000, 2, 1, 2, 5, 3, 1],
        output: 5000000
    }
];

describe("#628. Maximum Product of Three Numbers", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output);
        });
    });
});