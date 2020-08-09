const TreeNode = require('./TreeNode');

const sortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
    if (end < start) return null;

    const middleIndex = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[middleIndex]);

    node.left = sortedArrayToBST(nums, start, middleIndex - 1);
    node.right = sortedArrayToBST(nums, middleIndex + 1, end);

    return node;
};

const horizontalBuildBST = args => {
    let nodes = [new TreeNode(args[0])];
    for (let i = 1; i < args.length; i++) {
        if (args[i] === null) {
            continue;
        }
        let currentNode = new TreeNode(args[i]);
        nodes.push(currentNode);
        if (i % 2 === 1) {
            nodes[(i - 1) / 2].left = currentNode;
        } else {
            nodes[(i - 2) / 2].right = currentNode;
        }
    }
    return nodes[0];
}

const horizontalBuildBSTWithNullNodeVal = args => {
    let nodes = [new TreeNode(args[0])];
    for (let i = 1; i < args.length; i++) {
        let currentNode = new TreeNode(args[i]);
        nodes.push(currentNode);
        if (i % 2 === 1) {
            nodes[(i - 1) / 2].left = currentNode;
        } else {
            nodes[(i - 2) / 2].right = currentNode;
        }
    }
    return nodes[0];
}

function TreeNode2(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const arrayToBinaryTree = (arr) => {
    if (arr === undefined || arr.length === 0) {
        return null;
    }

    const root = new TreeNode2(arr[0]);
    const queue = [root];

    let isLeft = true; // to be the left children or the right children
    arr.slice(1).forEach((val) => {
        const curr = val !== null ? new TreeNode2(val) : null;
        if (isLeft) {
            queue[0].left = curr;
        } else {
            queue[0].right = curr;
            queue.shift();
        }

        if (curr !== null) {
            queue.push(curr);
        }

        isLeft = !isLeft;
    });

    return root;
};

const prettyPrintBinaryTree = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        process.stdout.write('Empty tree\n');
        return;
    }

    if (node.right) {
        prettyPrintBinaryTree(
            node.right,
            prefix + (isLeft ? '│   ' : '    '),
            false
        );
    }

    process.stdout.write(prefix + (isLeft ? '└── ' : '┌── ') + node.val + '\n');

    if (node.left) {
        prettyPrintBinaryTree(
            node.left,
            prefix + (isLeft ? '    ' : '│   '),
            true
        );
    }
};

module.exports = {
    sortedArrayToBST: sortedArrayToBST,
    horizontalBuildBST: horizontalBuildBST,
    horizontalBuildBSTWithNullNodeVal: horizontalBuildBSTWithNullNodeVal,
    prettyPrintBinaryTree: prettyPrintBinaryTree,
    arrayToBinaryTree: arrayToBinaryTree
}