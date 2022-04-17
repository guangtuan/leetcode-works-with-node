const assert = require("assert");
const resolve = require("./index2");

const testCases = [
    {
        input: [2, 2, 3, 3, 2, 4, 4, 4, 4, 4],
        expected: 4
    },
    {
        input: [2, 3, 3],
        expected: -1
    },
];

describe('#2nd', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${input}, output is ${expected}`, () => {
            assert.deepEqual(resolve(input), expected);
        });
    });
});