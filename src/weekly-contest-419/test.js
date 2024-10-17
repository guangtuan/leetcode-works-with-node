const assert = require('assert');

(() => {
    const resolve = require('./index1');
    const testCases = [
        {
            input: {
                nums: [50, 50, 50, 50, 50, 50],
                k: 6,
                x: 1
            },
            expected: [300],
        },
        {
            input: {
                nums: [1, 1, 2, 2, 3, 4, 2, 3],
                k: 6,
                x: 2
            },
            expected: [6, 10, 12],
        },
        {
            input: {
                nums: [3, 8, 7, 8, 7, 5],
                k: 2,
                x: 2
            },
            expected: [11, 15, 15, 15, 12],
        },
    ]

    describe('#1st', () => {
        testCases.forEach(({ input, expected }, index) => {
            it(`case ${index}`, () => {
                const label = `weekly-contest#419 -> case${index}`
                console.time(label)
                const actual = resolve(input.nums, input.k, input.x);
                console.timeLog(label)
                assert.deepEqual(actual, expected)
            })
        })
    })
})();

(() => {
    const resolve = require('./index2');
    const testCases = [
        {
            input: {
                root: [5, 3, 6, 5, 2, 5, 7, 1, 8, null, null, 6, 8],
                k: 2
            },
            expected: 3,
        },
        {
            input: {
                root: [1, 2, 3, 4, 5, 6, 7],
                k: 1
            },
            expected: 7,
        },
        {
            input: {
                root: [1, 2, 3, null, 4],
                k: 3
            },
            expected: -1,
        }
    ]

    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    const toTreeNode = (idx, array) => {
        const value = array[idx];
        if (value === null) {
            return undefined;
        }
        if (value === undefined) {
            return null;
        }
        let leftIndex = idx * 2 + 1;
        let rightIndex = idx * 2 + 2;
        return new TreeNode(
            value,
            toTreeNode(leftIndex, array),
            toTreeNode(rightIndex, array)
        );
    }

    describe('#2nd', () => {
        testCases.forEach(({ input, expected }, index) => {
            it(`case ${index}`, () => {
                const label = `weekly-contest#418 -> case${index}`
                console.time(label)
                const actual = resolve(toTreeNode(0, input.root), input.k);
                console.timeLog(label)
                assert.deepEqual(actual, expected)
            })
        })
    })
})();
