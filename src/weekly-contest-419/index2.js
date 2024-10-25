/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestPerfectSubtree = function (root, k) {
    const result = []
    const walk = (node) => {
        if (node === null) {
            result.push({ perfect: true, size: 0 })
            return { perfect: true, size: 0 }
        }
        let { perfect: leftPerfect, size: leftSize } = walk(node.left)
        let { perfect: rightPerfect, size: rightSize } = walk(node.right)
        const merged = {
            perfect: leftPerfect && rightPerfect && leftSize === rightSize,
            size: leftSize + rightSize + 1,
        }
        result.push(merged)
        return merged
    }
    walk(root)
    return (
        result
            .filter((it) => it.size !== 0 && it.perfect)
            .sort((a, b) => b.size - a.size)
            .map((it) => it.size)[k - 1] || -1
    )
}

module.exports = kthLargestPerfectSubtree
