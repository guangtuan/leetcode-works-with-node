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
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let getMiddle = head => {
        let fast = head;
        let slow = head;
        while (fast) {
            fast = fast.next;
            if (fast) {
                slow = slow.next;
                fast = fast.next;
            } else {
                break;
            }
        }
        return slow;
    }
};