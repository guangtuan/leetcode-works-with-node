const assert = require("assert");
const resolve = require("./index2");

const testCases = [
    {
        input: [95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30, 7, 37, 26, 55, 76, 60, 43, 36, 85, 47, 96, 6],
        expected: 3
    },
    {
        input: [3, 4, 2, 3, 5, 4, 7],
        expected: 4
    },
    {
        input: [3, 4, 2, 3, 4, 7],
        expected: 4
    },
    {
        input: [1, 0, 5, 3],
        expected: -1
    },
];

describe('#2nd', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${input}, output is ${expected}`, () => {
            console.table([input]);
            assert.deepEqual(resolve(input), expected);
        });
    });
});