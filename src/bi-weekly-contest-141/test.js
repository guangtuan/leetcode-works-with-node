const assert = require('assert');

(() => {

    const resolve = require('./index1');
    const testCases = [
        {
            input: {
                nums: [2, 3, 5, 7],
            },
            expected: [-1, 1, 4, 3],
        },
        {
            input: {
                nums: [11, 13, 31, 91111]
            },
            expected: [9, 12, 15, 91107]
        }
    ];

    describe('#1st', () => {
        testCases.forEach(({ input, expected }, index) => {
            it(`case ${index}`, () => {
                const label = `bi-weekly-contest#141.1 -> case${index}`
                console.time(label)
                const actual = resolve(input.nums);
                console.timeLog(label)
                assert.deepEqual(actual, expected)
            })
        })
    })
})();

(() => {

    const resolve = require('./index2');
    const testCases = [
        {
            input: {
                nums: [2, 3, 5, 7],
            },
            expected: [-1, 1, 4, 3],
        },
        {
            input: {
                nums: [11, 13, 31, 91111]
            },
            expected: [9, 12, 15, 91107]
        }
    ];

    describe('#2nd', () => {
        testCases.forEach(({ input, expected }, index) => {
            it(`case ${index}`, () => {
                const label = `bi-weekly-contest#141.2 -> case${index}`
                console.time(label)
                const actual = resolve(input.nums);
                console.timeLog(label)
                assert.deepEqual(actual, expected)
            })
        })
    })
})();