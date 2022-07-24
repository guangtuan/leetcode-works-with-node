const assert = require('assert');
const resolve = require('./index2');

const testCases = [
    {
        input: [
            [3, 2, 1], [1, 7, 6], [2, 7, 7]
        ],
        expected: 1
    },
    {
        input: [
            [3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]
        ],
        expected: 3
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