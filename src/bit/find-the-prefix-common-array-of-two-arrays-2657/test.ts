describe('2657. Find the Prefix Common Array of Two Arrays', () => {
    const assert = require('assert');
    const resolve = require('./index');
    const testCases = [
        {
            input: {
                A: [1, 11, 30, 28, 22, 26, 27, 4, 8, 29, 23, 24, 2, 16, 25, 5, 14, 13, 6, 17, 9, 3, 21, 31, 15, 12, 10, 19, 7, 20, 18],
                B: [28, 30, 17, 23, 13, 4, 7, 16, 19, 26, 12, 1, 15, 6, 9, 20, 27, 24, 21, 10, 8, 11, 29, 3, 31, 22, 14, 5, 25, 18, 2]
            },
            expected: [0, 0, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 8, 10, 11, 12, 14, 15, 17, 18, 20, 22, 24, 26, 28, 29, 31]
        },
        {
            input: {
                A: [1, 3, 2, 4],
                B: [3, 1, 2, 4],
            },
            expected: [0, 2, 3, 4]
        },
        {
            input: {
                A: [2, 3, 1],
                B: [3, 1, 2],
            },
            expected: [0, 1, 3]
        }
    ];
    const run = (testCase: { input: { A: number[], B: number[] }, expected: number[] }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(resolve(testCase.input.A, testCase.input.B), testCase.expected);
        });
    };
    testCases.forEach(run);
});
