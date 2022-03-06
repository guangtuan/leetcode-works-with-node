/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */


var createBinaryTree = function (descriptions) {
    function TreeNode (val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    const nodeMap = {};
    const isChild = new Set();
    for (let description of descriptions) {
        const [val, c, isLeft] = description;
        nodeMap[val] = new TreeNode(val, undefined, undefined);
        nodeMap[c] = new TreeNode(c, undefined, undefined);
    }
    for (let description of descriptions) {
        const [val, c, isLeft] = description;
        if (isLeft === 1) {
            nodeMap[val].left = nodeMap[c];
            isChild.add(c);
        } else {
            nodeMap[val].right = nodeMap[c];
            isChild.add(c);
        }
    }
    for (let node of Object.values(nodeMap)) {
        if (!isChild.has(node.val)) {
            return node;
        }
    }
    return null;
};