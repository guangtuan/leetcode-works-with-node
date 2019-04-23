const assert = require('assert');

const resolve = require('./index');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const testCases = [
    {
        input: (() => {
            const root = new TreeNode(3);
            root.left = new TreeNode(9);
            root.right = (() => {
                const ret = new TreeNode(20);
                ret.left = new TreeNode(15);
                ret.right = new TreeNode(7);
                return ret;
            })();
            return root;
        })(),
        output: [
            [3],
            [9, 20],
            [15, 7]
        ]
    },
    {
        input: (() => {
            const root = new TreeNode(3);
            return root;
        })(),
        output: [
            [3]
        ]
    }
];

describe("test", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)} and output is ${JSON.stringify(output)}`, () => {
            assert.deepEqual(resolve(input), output);
        });
    });
});