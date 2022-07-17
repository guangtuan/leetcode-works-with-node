const assert = require('assert');
const resolve = require('./index2');

const testCases = [
    {
        input: [18,43,36,13,7],
        expected: 54
    },
    {
        input: [10,12,19,14],
        expected: -1
    }
];

describe('#2st', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table(input);
            assert.deepEqual(resolve(input), expected);
        });
    });
});