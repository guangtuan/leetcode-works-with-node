/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    function getHeight(level, root) {
        if (root.left !== null) {
            if (root.right !== null) {
                const leftHeight = getHeight(level + 1, root.left)
                const rightHeight = getHeight(level + 1, root.right)
                return Math.max(leftHeight, rightHeight)
            }
            return getHeight(level + 1, root.left)
        }
        if (root.right !== null) {
            return getHeight(level + 1, root.right)
        }
        return level
    }
    return getHeight(1, root)
}

module.exports = maxDepth
