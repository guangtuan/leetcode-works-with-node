const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: 3,
        output: [
            "((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()"
        ]
    }
];

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output);
    });
};

describe("#22. Generate Parentheses", () => {
    testCases.forEach(run);
});