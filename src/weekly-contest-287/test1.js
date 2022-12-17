const assert = require('assert')
const resolve = require('./index1')

const testCases = [
    {
        input: {
            current: '00:00',
            correct: '23:59',
        },
        expected: 32,
    },
    {
        input: {
            current: '02:30',
            correct: '04:35',
        },
        expected: 3,
    },
    {
        input: {
            current: '11:00',
            correct: '11:01',
        },
        expected: 1,
    },
]

describe('#1st', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            assert.deepEqual(resolve(input.current, input.correct), expected)
        })
    })
})
