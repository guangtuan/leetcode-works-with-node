const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: [2, 7, 4, 1, 8, 1],
        output: 1
    }
];

describe('#1049. Last Stone Weight II', () => {
    testCases.forEach(testCase => {
        it(`input ${testCase.input}, output is ${testCase.output}`, () => {
            assert.equal(testCase.output, resolve.call(null, testCase.input));
        });
    });
});