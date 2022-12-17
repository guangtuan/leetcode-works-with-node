const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: {
            A: 'ab',
            B: 'ba',
        },
        output: true,
    },
    {
        input: {
            A: 'ab',
            B: 'ab',
        },
        output: false,
    },
    {
        input: {
            A: 'aa',
            B: 'aa',
        },
        output: true,
    },
    {
        input: {
            A: 'aaaaaaabc',
            B: 'aaaaaaacb',
        },
        output: true,
    },
    {
        input: {
            A: '',
            B: 'aa',
        },
        output: false,
    },
    {
        input: {
            A: 'abab',
            B: 'abab',
        },
        output: true,
    },
]

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(
        input,
    )}, expected output is ${output}`, () => {
        assert.equal(resolve(input.A, input.B), output)
    })
}

describe('buddy Strings', () => {
    testCases.forEach(run)
})
