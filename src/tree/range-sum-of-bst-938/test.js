const assert = require('assert');

const resolve = require('./index');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const testCases = [
    {
        input: (() => {
            const root = new TreeNode(10);
            root.left = new TreeNode(5);
            root.right = new TreeNode(15);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(7);
            root.right.left = null;
            root.right.right = new TreeNode(18);
            root.toString = () => [10, 5, 15, 3, 7, null, 18];
            return {
                root,
                L: 7,
                R: 15
            };
        })(),
        output: 32
    },
    {
        input: (() => {
            const root = new TreeNode(10);
            root.left = new TreeNode(5);
            root.right = new TreeNode(15);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(7);
            root.right.left = new TreeNode(13);
            root.right.right = new TreeNode(18);
            root.left.left.left = new TreeNode(1);
            root.left.left.right = null;
            root.left.right.left = new TreeNode(6);
            root.toString = () => [10, 5, 15, 3, 7, 13, 18, 1, null, 6];
            return {
                root,
                L: 6,
                R: 10
            }
        })(),
        output: 23
    },
    {
        input: (() => {
            const root = new TreeNode(18);
            root.left = new TreeNode(9);
            root.right = new TreeNode(27);
            root.left.left = new TreeNode(6);
            root.left.right = new TreeNode(15);
            root.right.left = new TreeNode(24);
            root.right.right = new TreeNode(30);
            root.left.left.left = new TreeNode(3);
            root.left.left.right = null;
            root.left.right.left = new TreeNode(12);
            root.left.right.right = null;
            root.right.left.left = new TreeNode(21);
            root.toString = () => [18, 9, 27, 6, 15, 24, 30, 3, null, 12, null, 21];
            return {
                root,
                L: 18,
                R: 24
            }
        })(),
        output: 63
    }
];

describe("#938. Range Sum of BST", () => {
    testCases.forEach(({ input, output }) => {
        it(`tree is ${input.root.toString()}, L is ${input.L}, R is ${input.R} and output is ${output}`, () => {
            assert.equal(resolve(input.root, input.L, input.R), output);
        });
    });
});