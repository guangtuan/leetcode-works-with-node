const assert = require('assert');
const resolve = require('./index1');

const testCases = [
    {
        input: [-1, 2, -3, 3],
        expected: 3
    },
    {
        input: [-1, 10, 6, 7, -7, 1],
        expected: 7
    },
    {
        input: [-10, 8, 6, 7, -2, -3],
        expected: -1
    },
    {
        input: [14, 33, 40, -33, 8, -24, -42, 30, -18, -34],
        expected: 33
    }
]


describe('#1st', () => {
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