const assert = require('assert')
const resolve = require('./index2')

const testCases = [
    {
        input: [1, 13, 10, 12, 31],
        expected: 6,
    },
    {
        input: [2, 2, 2],
        expected: 1,
    },
]

describe('#2nd', () => {
    testCases.forEach(({ input, expected }, index) => {
        it(`case ${index}`, () => {
            const label = `weekly-contest#315 -> case${index}`
            console.time(label)
            const actual = resolve(input)
            console.timeLog(label)
            assert.deepEqual(actual, expected)
        })
    })
})
