const resolve = require('./index');
const assert = require('assert');

const testCases = [{
    input: "babad",
    output: "bab"
}, {
    input: "cbbd",
    output: "bb"
} ];

describe('#Longest Palindromic Substring', () => {
    testCases.forEach(testCase => {
        it(`input ${testCase.input}, output is ${testCase.output}`, () => {
            assert.equal(resolve.call(null, testCase.input), testCase.output);
        });
    });
});