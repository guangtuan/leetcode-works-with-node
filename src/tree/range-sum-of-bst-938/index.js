/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let result = 0;
    const walk = root => {
        if (root.left !== null) {
            walk(root.left);
        }
        if (L <= root.val) {
            if (root.val <= R) {
                result += root.val;
            }
        } else {
            if (root.val > R) {
                return;
            }
        }
        if (root.right !== null) {
            walk(root.right);
        }
    }
    walk(root);
    return result;
};

module.exports = rangeSumBST;