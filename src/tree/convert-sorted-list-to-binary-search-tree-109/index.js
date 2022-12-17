/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (head === null) {
        return null
    }
    const listToArray = (head) => {
        const array = []
        array.push(head.val)
        while (head.next != null) {
            array.push(head.next.val)
            head = head.next
        }
        return array
    }
    const subTree = (array, left, right) => {
        if (left > right) {
            return null
        }
        const middle = left + Math.floor((right - left) / 2)
        const root = new TreeNode(array[middle])
        root.left = subTree(array, left, middle - 1)
        root.right = subTree(array, middle + 1, right)
        return root
    }
    const array = listToArray(head)
    return subTree(array, 0, array.length - 1)
}

module.exports = sortedListToBST
