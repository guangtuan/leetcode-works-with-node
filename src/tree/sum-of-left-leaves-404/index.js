/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let result = 0
    const walk = (node, side) => {
        if (node.left === null && node.right === null) {
            if (side === 'left') {
                result += node.val
            }
            return
        }
        if (node.right !== null) {
            walk(node.right, 'right')
        }
        if (node.left !== null) {
            walk(node.left, 'left')
        }
    }
    if (root === null) {
        return 0
    }
    walk(root)
    return result
}

module.exports = sumOfLeftLeaves
