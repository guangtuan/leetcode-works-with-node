function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const assert = require("assert");

const resolve = require('./index');

const testCases = [
    {
        input: (() => {
            const ret = new TreeNode(1);
            ret.right = new TreeNode(2);
            ret.right.left = new TreeNode(3);
            return ret;
        })(),
        output: [1, 3, 2]
    },
    {
        input: (() => {
            const ret = new TreeNode(1);
            ret.left = new TreeNode(2);
            ret.left.left = new TreeNode(3);
            ret.left.right = new TreeNode(4);
            ret.right = new TreeNode(5);
            ret.right.left = new TreeNode(6);
            ret.right.right = new TreeNode(7);
            return ret;
        })(),
        output: [3, 2, 4, 1, 6, 5, 7]
    }
];

describe("#94.Binary tree Inorder traversal", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input, null, 4)}, output is ${output}`, () => {
            assert.deepEqual(resolve(input), output);
        });
    });
});