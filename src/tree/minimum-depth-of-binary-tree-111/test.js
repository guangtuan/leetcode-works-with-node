function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const assert = require('assert');

const resolve = require('./index');

// [6,2,8,0,4,7,9,null,null,3,5]
const testCases = [
    (() => {
        const input = new TreeNode(6);
        input.left = new TreeNode(2);
        input.right = new TreeNode(8);
        input.left.left = new TreeNode(0);
        input.left.right = new TreeNode(4);
        input.left.right.left = new TreeNode(3);
        input.left.right.right = new TreeNode(5);
        input.right = new TreeNode(8);
        input.right.left = new TreeNode(7);
        input.right.right = new TreeNode(9);
        return {
            input,
            output: 3
        };
    })(),
    (() => {
        // [3,9,20,null,null,15,7]
        const input = new TreeNode(3);
        input.left = new TreeNode(9);
        input.right = new TreeNode(20);
        input.right.left = new TreeNode(15);
        input.right.right = new TreeNode(7);
        return {
            input,
            output: 2
        }
    })(),
    (() => {
        // [3,9,20,null,null,15,7]
        const input = new TreeNode(1);
        input.left = new TreeNode(2);
        return {
            input,
            output: 2
        }
    })(),
    (() => {
        // [1, 2, 3, 4, null, null, 5]
        const input = new TreeNode(1);
        input.left = new TreeNode(2);
        input.right = new TreeNode(3);
        input.left.left = new TreeNode(4);
        input.right.right = new TreeNode(5);
        return {
            input,
            output: 3
        }
    })()
];

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(input, null, 4)}, and output is ${output}`, () => {
        assert.deepEqual(resolve(input), output);
    });
};

describe("min depth", () => {
    testCases.forEach(run);
});