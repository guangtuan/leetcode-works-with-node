/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const collect = [];
    const stack = [];
    let current = root;
    while (true) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        if (stack.length > 0) {
            const poped = stack.pop();
            collect.push(poped.val);
            current = poped.right;
        }
        if (current === null && stack.length === 0) {
            break;
        }
    }
    return collect;
};

module.exports = inorderTraversal;