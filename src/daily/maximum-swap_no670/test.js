const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: 9938484,
        expected: 9988434,
    },
    {
        input: 2736,
        expected: 7236,
    },
    {
        input: 9973,
        expected: 9973,
    },
    {
        input: 13948384,
        expected: 93148384,
    },
    {
        input: 100000,
        expected: 100000,
    },
]

describe('#670 -> maximum-swap', () => {
    testCases.forEach((testCase) => {
        it(`input ${testCase.input}, expected is ${testCase.expected}`, () => {
            assert.equal(resolve.call(null, testCase.input), testCase.expected)
        })
    })
})
