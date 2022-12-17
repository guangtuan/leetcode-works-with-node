const ListNode = require('./ListNode')

class LinkedList {
    constructor(...valueArray) {
        this.head = new ListNode(valueArray.shift())
        valueArray.reduce((acc, currentValue) => {
            acc.next = new ListNode(currentValue)
            return acc.next
        }, this.head)
    }

    getHead() {
        return this.head
    }

    cycle(...cycleNodes) {
        let cursor = this.head
        let a = null
        let b = null
        let [aVal, bVal] = cycleNodes
        while (a === null || b === null) {
            if (cursor.val === aVal) {
                a = cursor
            }
            if (cursor.val === bVal) {
                b = cursor
            }
            cursor = cursor.next
        }
        a.next = b
        return this
    }
}

module.exports = LinkedList
