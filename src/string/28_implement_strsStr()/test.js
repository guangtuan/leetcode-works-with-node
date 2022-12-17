const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: {
            haystack: 'hello',
            needle: 'll',
        },
        output: 2,
    },
    {
        input: {
            haystack: 'aaaaa',
            needle: 'bba',
        },
        output: -1,
    },
    {
        input: {
            haystack: '',
            needle: '',
        },
        output: 0,
    },
]

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(
        input,
    )}, expected output is ${output}`, () => {
        assert.strictEqual(output, resolve(input.haystack, input.needle))
    })
}

describe('#28. Implement strStr()', () => {
    testCases.forEach(run)
})
