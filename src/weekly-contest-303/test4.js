const assert = require('assert')
const resolve = require('./index4')

const testCases = [
    {
        input: {
            nums: [1, 2, 3, 1],
            k: 3,
        },
        expected: 5,
    },
    {
        input: {
            nums: [5, 1, 1],
            k: 10,
        },
        expected: 0,
    },
    {
        input: {
            nums: require('./testcase.json'),
            k: 10,
        },
        expected: 9999199968,
    },
]

describe('#4th', () => {
    testCases.forEach(({ input, expected }, index) => {
        it(`case ${index}`, () => {
            // console.log(JSON.stringify(input));
            // console.log(JSON.stringify(expected));
            // if (index === 2) {
            //     return;
            // }
            const label = `weekly-contest#303 -> case${index}`
            console.time(label)
            const actual = resolve(input.nums, input.k)
            console.timeLog(label)
            assert.deepEqual(actual, expected)
        })
    })
})
