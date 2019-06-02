function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const assert = require('assert');

const resolve = require('./index');

// [6,2,8,0,4,7,9,null,null,3,5]
const testCases = [
    (() => {
        const input1 = new TreeNode(1);
        input1.left = new TreeNode(3);
        input1.right = new TreeNode(2);
        input1.left.left = new TreeNode(5);
        const input2 = new TreeNode(2);
        input2.left = new TreeNode(1);
        input2.right = new TreeNode(3);
        input2.left.right = new TreeNode(4);
        input2.right.right = new TreeNode(7);
        const output = new TreeNode(3);
        output.left = new TreeNode(4);
        output.right = new TreeNode(5);
        output.left.left = new TreeNode(5);
        output.left.right = new TreeNode(4);
        output.right.right = new TreeNode(7);
        return {
            input1,
            input2,
            output
        }
    })()
];

const run = ({ input1, input2, output }) => {
    it(`merge two binary trees`, () => {
        assert.deepEqual(resolve(input1, input2), output);
    });
};

describe("#617. Merge Two Binary Trees", () => {
    testCases.forEach(run);
});