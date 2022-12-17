const assert = require('assert')

const testCases = [
    {
        s: 'anagram',
        t: 'nagaram',
        result: true,
    },
    {
        s: 'rat',
        t: 'car',
        result: false,
    },
]

const resolve = require('./index')

describe('valid anagram', () => {
    testCases.forEach(({ s, t, result }) => {
        it(`input s is ${s}, t is ${t}, result is ${result}`, () => {
            assert.equal(result, resolve(s, t))
        })
    })
})
