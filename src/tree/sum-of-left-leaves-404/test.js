function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

const assert = require('assert')

const resolve = require('./index')

// [6,2,8,0,4,7,9,null,null,3,5]
const testCases = [
    (() => {
        const input = new TreeNode(3)
        input.left = new TreeNode(9)
        input.right = new TreeNode(20)
        input.right.left = new TreeNode(15)
        input.right.right = new TreeNode(7)
        return {
            input,
            output: 24,
        }
    })(),
    {
        input: null,
        output: 0,
    },
]

const run = ({ input, output }) => {
    it(``, () => {
        assert.deepEqual(resolve(input), output)
    })
}

describe('#404. Sum of Left Leaves', () => {
    testCases.forEach(run)
})
