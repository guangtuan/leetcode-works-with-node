describe('1310. XOR Queries of a Subarray', () => {
    const assert = require('assert')
    const resolve = require('./index')
    const testCases = [
        {
            input: {
                arr: [1, 3, 4, 8],
                queries: [[0, 1], [1, 2], [0, 3], [3, 3]],
            },
            expected: [2, 7, 14, 8],
        },
        {
            input: {
                arr: [4, 8, 2, 10],
                queries: [[2, 3], [1, 3], [0, 0], [0, 3]],
            },
            expected: [8, 0, 4, 4],
        },
    ]
    const run = (testCase: {
        input: { arr: number[]; queries: number[][] }
        expected: number[]
    }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(
                resolve(testCase.input.arr, testCase.input.queries),
                testCase.expected,
            )
        })
    }
    testCases.forEach(run)
})
