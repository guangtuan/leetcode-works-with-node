const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 'ebcbbececabbacecbbcbe',
        expected: true,
    },
    {
        input: 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
        expected: true,
    },
    {
        input: 'abaabac',
        expected: true,
    },
    {
        input: 'a',
        expected: true,
    },
    {
        input: 'aa',
        expected: true,
    },
    {
        input: 'aba',
        expected: true,
    },
    {
        input: 'abca',
        expected: true,
    },
    {
        input: 'abc',
        expected: false,
    },
]

describe('#680. valid-palindrome-ii', () => {
    testCases.forEach(({ input, expected }) => {
        it(`test case is ${JSON.stringify({ input, expected })}`, () => {
            assert.equal(expected, resolve(input))
        })
    })
})
