const assert = require('assert');
const resolve = require('./index3');

const testCases = [
    {
        input: 443,
        expected: true
    },
    {
        input: 181,
        expected: true 
    },
    {
        input: 63,
        expected: false 
    }
]


describe('#3rd', () => {
    testCases.forEach(({ input, expected }, index) => {
        it(`case ${index}`, () => {
            const label = `weekly-contest#315 -> case${index}`;
            console.time(label);
            const actual = resolve(input);
            console.timeLog(label);
            assert.deepEqual(actual, expected);
        });
    });
});