const assert = require('assert');
const resolve = require('./index4');

const loadData = f => {
    const label = f;
    console.time(label);
    const val = require(f);
    console.timeLog(label);
    return val;
}

const testCases = [
    {
        input: loadData('./testcase.js'),
        expected: 43242
    },
    {
        input: [3, 3, 4, 2, 3],
        expected: 3
    },
    {
        input: [2, -1, 3, 1],
        expected: -1
    },
    {
        input: [1, 0],
        expected: 2
    },
    {
        input: [2, 0, 1],
        expected: 3
    },
    {
        input: [1, 2, 0, 4, 5, 6, 3, 8, 9, 7],
        expected: 4
    }
];

describe('#4th', () => {
    testCases.forEach(({ input, expected }, index) => {
        it(`case ${index}`, () => {
            // console.log(JSON.stringify(input));
            // console.log(JSON.stringify(expected));
            // if (index === 2) {
            //     return;
            // }
            const label = `weekly-contest#304 -> case${index}`;
            console.time(label);
            const actual = resolve(input);
            console.timeLog(label);
            assert.deepEqual(actual, expected);
        });
    });
});