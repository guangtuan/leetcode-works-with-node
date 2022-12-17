const testCases = [
    {
        input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
        output: [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']],
    },
]

const assert = require('assert')
const resolve = require('./index')

describe('group anagrams', () => {
    testCases.forEach(({ input, output }) => {
        it('', () => {
            assert.deepEqual(output, resolve(input))
        })
    })
})
