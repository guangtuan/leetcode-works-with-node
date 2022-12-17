const assert = require('assert')
const resolve = require('./index3')

const testCases = [
    {
        input: {
            candies: [5, 8, 6],
            k: 3,
        },
        expected: 5,
    },
    {
        input: {
            candies: [2, 5],
            k: 11,
        },
        expected: 0,
    },
    {
        input: {
            candies: [10000000],
            k: 1,
        },
        expected: 10000000,
    },
]

describe('#3th', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table([input.candies])
            assert.deepEqual(resolve(input.candies, input.k), expected)
        })
    })
})
