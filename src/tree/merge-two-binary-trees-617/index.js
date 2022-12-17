/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (node1, node2) {
    if (node1 === null && node2 === null) {
        return null
    }
    if (node1 === null) {
        return node2
    }
    if (node2 === null) {
        return node1
    }
    return {
        val: node1.val + node2.val,
        left: mergeTrees(node1.left, node2.left),
        right: mergeTrees(node1.right, node2.right),
    }
}

module.exports = mergeTrees
