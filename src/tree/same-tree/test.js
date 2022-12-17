const {
    horizontalBuildBSTWithNullNodeVal,
    prettyPrintBinaryTree,
} = require('../../../DataStructure/Tree/create')
const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: {
            left: [1, 2, 3],
            right: [1, 2, 3],
        },
        output: true,
    },
    {
        input: {
            left: [1, 2],
            right: [1, null, 2],
        },
        output: false,
    },
    {
        input: {
            left: [1, 2, 1],
            right: [1, 1, 2],
        },
        output: false,
    },
    {
        input: {
            left: [10, 5, 15],
            right: [10, 5, null, null, 15],
        },
        output: false,
    },
    {
        input: {
            left: [1, 2],
            right: [1, null, 2],
        },
        output: false,
    },
]

describe('#100. Same Tree', () => {
    testCases.forEach(({ input: { left, right }, output }) => {
        it(`${output}`, () => {
            const realLeft = horizontalBuildBSTWithNullNodeVal(left)
            const realRight = horizontalBuildBSTWithNullNodeVal(right)
            prettyPrintBinaryTree(realLeft)
            console.log('')
            prettyPrintBinaryTree(realRight)
            assert.equal(resolve(realLeft, realRight), output)
        })
    })
})
