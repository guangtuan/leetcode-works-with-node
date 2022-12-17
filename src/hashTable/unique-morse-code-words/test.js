const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: ['gin', 'zen', 'gig', 'msg'],
        expected: 2,
    },
    {
        input: ['a'],
        expected: 1,
    },
]

describe('unique-morse-code-words', () => {
    testCases.forEach(({ input, expected }) => {
        console.table([input])
        it('', () => {
            let actual = resolve(input)
            assert.deepEqual(actual, expected)
        })
    })
})
