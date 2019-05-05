const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: {
            A: "abcde",
            B: "cdeab"
        },
        output: true
    },
    {
        input: {
            A: "abcde",
            B: "abced"
        },
        output: false
    },
    {
        input: {
            A: "abcde",
            B: "bcdea"
        },
        output: true
    },
    {
        input: {
            A: "aa",
            B: "a"
        },
        output: false
    }
];

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(input)}, expected output is ${output}`, () => {
        assert.equal(resolve(input.A, input.B), output);
    });
};

describe("#796.rotate string", () => {
    testCases.forEach(run);
});