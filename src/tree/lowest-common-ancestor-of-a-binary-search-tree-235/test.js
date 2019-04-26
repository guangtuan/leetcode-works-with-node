function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const assert = require('assert');

const resolve = require('./index');

// [6,2,8,0,4,7,9,null,null,3,5]
const testCases = [
    (() => {
        const root = new TreeNode(6);
        root.left = new TreeNode(2);
        root.right = new TreeNode(8);
        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(4);
        root.left.right.left = new TreeNode(3);
        root.left.right.right = new TreeNode(5);
        root.right = new TreeNode(8);
        root.right.left = new TreeNode(7);
        root.right.right = new TreeNode(9);
        const input = {
            root: root,
            p: root.left,
            q: root.right
        };
        input.toString = (function () {
            return JSON.stringify({
                rootVal: this.root.val,
                pVal: this.p.val,
                qVal: this.q.val
            })
        }).bind(input);
        const output = root;
        return {
            input,
            output
        };
    })()
];

const run = ({ input, output }) => {
    it(`input is ${input.toString()}, and output is ${output.val}`, () => {
        assert.deepEqual(resolve(input.root, input.p, input.q), output);
    });
};

describe("lowestCommonAncestor", () => {
    testCases.forEach(run);
});