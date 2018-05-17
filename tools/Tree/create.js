const TreeNode = require('./TreeNode');

const sortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
    if (end < start) return null;

    const middleIndex = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[middleIndex]);

    node.left = sortedArrayToBST(nums, start, middleIndex - 1);
    node.right = sortedArrayToBST(nums, middleIndex + 1, end);

    return node;
};

// 0,
// 1, 2
// 3, 4, 5, 6
// 7, 8, 9, 10, 11, 12, 13, 14

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

module.exports = {
    sortedArrayToBST: sortedArrayToBST,
    horizontalBuildBST: horizontalBuildBST
}