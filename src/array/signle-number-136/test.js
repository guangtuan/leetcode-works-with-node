const resolve = require('./index');
const assert = require('assert');
const testCases = [
    {
        input: [2, 2, 1],
        output: 1
    }, {
        input: [4, 1, 2, 1, 2],
        output: 4
    }
];

describe('#136. Single Number', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output);
        });
    });
});