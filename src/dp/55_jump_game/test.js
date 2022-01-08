const resolve = require('./index');
const assert = require('assert');

const testCases = [{
    input: [2, 3, 1, 1, 4],
    expected: true
}, {
    input: [3, 2, 1, 0, 4],
    expected: false
}, {
    input: [0, 1],
    expected: false
}, {
    input: [0],
    expected: true
}, {
    input: [2, 0],
    expected: true
}];

describe('#Jump Game', () => {
    testCases.forEach(testCase => {
        it(`input ${testCase.input}, expected is ${testCase.expected}`, () => {
            assert.equal(resolve.call(null, testCase.input), testCase.expected);
        });
    });
});