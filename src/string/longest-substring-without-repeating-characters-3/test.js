const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 'abcabcbb',
        output: 3,
    },
    {
        input: 'bbbbb',
        output: 1,
    },
    {
        input: 'pwwkew',
        output: '3',
    },
    {
        input: '',
        output: 0,
    },
    {
        input: ' ',
        output: 1,
    },
    {
        input: 'au',
        output: 2,
    },
    {
        input: 'bbtablud',
        output: 6,
    },
    {
        input: 'aabaab!bb',
        output: 3,
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('#3.Longest Substring Without Repeating Characters', () => {
    testCases.forEach(run)
})
