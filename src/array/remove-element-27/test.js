const testCases = [
    {
        input: {
            array: [3, 2, 2, 3],
            val: 3,
        },
        output: {
            length: 2,
            array: [2, 2],
        },
    },
    {
        input: {
            array: [0, 1, 2, 2, 3, 0, 4, 2],
            val: 2,
        },
        output: {
            length: 5,
            array: [0, 1, 3, 0, 4],
        },
    },
    {
        input: {
            array: [7, 7, 4, 4, 1, 7, 8],
            val: 7,
        },
        output: {
            length: 4,
            array: [4, 4, 1, 8],
        },
    },
    {
        input: {
            array: [7, 1],
            val: 7,
        },
        output: {
            length: 1,
            array: [1],
        },
    },
    {
        input: {
            array: [1],
            val: 1,
        },
        output: {
            length: 0,
            array: [],
        },
    },
    {
        input: {
            array: [1, 1],
            val: 1,
        },
        output: {
            length: 0,
            array: [],
        },
    },
]

const assert = require('assert')
const resolve = require('./index')

describe('#remove element', () => {
    testCases.forEach(
        ({
            input: { array: inArray, val },
            output: { array: outArray, length },
        }) => {
            it(`#input array: ${inArray} and val: ${val}, return length ${length} and outArray is ${outArray}`, () => {
                assert.equal(length, resolve(inArray, val))
                assert.deepEqual(inArray.slice(0, length), outArray)
            })
        },
    )
})
