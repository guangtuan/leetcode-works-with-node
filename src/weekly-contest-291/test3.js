const assert = require("assert");
const resolve = require("./index3");

const testCases = [
    {
        input: {
            nums: [1, 9, 8, 7, 19],
            k: 1,
            p: 6
        },
        expected: 15
    },
    {
        input: {
            nums: [2, 3, 3, 2, 2],
            k: 2,
            p: 2
        },
        expected: 11
    },
    {
        input: {
            nums: [1, 2, 3, 4],
            k: 4,
            p: 1
        },
        expected: 10
    }
];

describe('#3rd', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table([input.nums]);
            assert.deepEqual(resolve(input.nums, input.k, input.p), expected);
        });
    });
});