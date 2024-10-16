const assert = require('assert');

(() => {
    const resolve = require('./index1');
    const testCases = [
        {
            input: {
                nums: [50, 50, 50, 50, 50, 50],
                k: 6,
                x: 1
            },
            expected: [300],
        },
        {
            input: {
                nums: [1, 1, 2, 2, 3, 4, 2, 3],
                k: 6,
                x: 2
            },
            expected: [6, 10, 12],
        },
        {
            input: {
                nums: [3, 8, 7, 8, 7, 5],
                k: 2,
                x: 2
            },
            expected: [11, 15, 15, 15, 12],
        },
    ]

    describe('#1st', () => {
        testCases.forEach(({ input, expected }, index) => {
            it(`case ${index}`, () => {
                const label = `weekly-contest#419 -> case${index}`
                console.time(label)
                const actual = resolve(input.nums, input.k, input.x);
                console.timeLog(label)
                assert.deepEqual(actual, expected)
            })
        })
    })
})();
