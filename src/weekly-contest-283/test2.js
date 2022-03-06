const assert = require("assert");
const resolve = require("./index2");

const testCases = [
    {
        input: { nums: [1, 4, 25, 10, 25], k: 2 },
        output: 5
    },
    {
        input: { nums: [5, 6], k: 6 },
        output: 25
    }
];

describe('#2rd', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.equal(resolve(input.nums, input.k), output);
        });
    });
});