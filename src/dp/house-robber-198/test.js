const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: [1, 2, 3, 1],
        output: 4,
    },
    {
        input: [2, 7, 9, 3, 1],
        output: 12,
    },
    {
        input: [],
        output: 0,
    },
    {
        input: [1, 1],
        output: 1,
    },
]

describe('#house-robber', () => {
    testCases.forEach((testCase) => {
        it(`input ${testCase.input}, output is ${testCase.output}`, () => {
            assert.equal(testCase.output, resolve.call(null, testCase.input))
        })
    })
})
