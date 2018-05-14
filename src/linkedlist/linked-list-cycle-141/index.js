/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  while (head) {
    if (head.accessed) {
      return true;
    }
    head.accessed = true;
    head = head.next;
  }
  return false;
};

module.exports = hasCycle;