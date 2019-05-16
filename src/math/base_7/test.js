const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: 100,
        output: "202"
    },
    {
        input: 101,
        output: "203"
    },
    {
        input: 7,
        output: 10
    },
    {
        input: -7,
        output: "-10"
    },
    {
        input: 0,
        output: "0"
    }
];

describe("[Contest], base 7", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output);
        });
    });
});