const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: {
            width: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            s: "abcdefghijklmnopqrstuvwxyz"
        },
        expected: [3, 60]
    },
    {
        input: {
            width: [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            s: "bbbcccdddaaa"
        },
        expected: [2, 4]
    },
];

const run = ({input, expected}) => {
    it(`input is ${JSON.stringify(input)}, expected expected is ${expected}`, () => {
        assert.deepEqual(resolve(input.width, input.s), expected);
    });
};

describe("#806.number-of-lines-to-write-string", () => {
    testCases.forEach(run);
});