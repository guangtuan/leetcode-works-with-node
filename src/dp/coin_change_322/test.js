const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        coins: [1, 2, 5],
        amount: 11,
        output: 3,
    },
    {
        coins: [2],
        amount: 3,
        output: -1,
    },
    {
        coins: [1],
        amount: 0,
        output: 0,
    },
    {
        coins: [1],
        amount: 1,
        output: 1,
    },
    {
        coins: [186, 419, 83, 408],
        amount: 6249,
        output: 20,
    },
]

describe('#coin-change', () => {
    testCases.forEach((testCase) => {
        it(`input ${testCase.coins}, ${testCase.amount}, output is ${testCase.output}`, () => {
            assert.equal(
                testCase.output,
                resolve(testCase.coins, testCase.amount),
            )
        })
    })
})
