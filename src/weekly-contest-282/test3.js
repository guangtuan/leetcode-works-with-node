const assert = require('assert')
const resolve = require('./index3')

const testCases = [
    {
        input: { time: [2], totalTrips: 1 },
        output: 2,
    },
    {
        input: { time: [1, 2, 3], totalTrips: 5 },
        output: 3,
    },
    {
        input: { time: [5, 10, 10], totalTrips: 9 },
        output: 25,
    },
]

describe('#3rd', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.equal(resolve(input.time, input.totalTrips), output)
        })
    })
})
