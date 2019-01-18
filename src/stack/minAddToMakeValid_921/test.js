const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: "())",
        output: 1
    },
    {
        input: "(((",
        output: 3
    },
    {
        input: "()",
        output: 0
    },
    {
        input: "()))((",
        output: 4
    }
];

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output);
    });
};

describe("min add to make valid", () => {
    testCases.forEach(run);
});