const assert = require('assert');

const resolve = require('./index');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const testCases = [
    {
        output: (() => {
            const root = new TreeNode(0);
            root.left = new TreeNode(-3);
            root.left.left = new TreeNode(-10);
            root.right = new TreeNode(9);
            root.right.left = new TreeNode(5);
            return root;
        })(),
        input: (() => {
            const head = new ListNode(-10);
            head.next = new ListNode(-3);
            head.next.next = new ListNode(0);
            head.next.next.next = new ListNode(5);
            head.next.next.next.next = new ListNode(9);
            return head;
        })()
    },
    {
        input: null,
        output: null
    }
];

const walkBstInOrder = tree => {
    const inOrder = ({ visit, node }) => {
        if (node === null) {
            return;
        }
        inOrder({ visit, node: node.left });
        visit(node.val);
        inOrder({ visit, node: node.right });
    }
    const collect = [];
    const visit = value => collect.push(value);
    inOrder({ visit, node: tree });
    return collect;
}

const listToArray = head => {
    if (head === null) {
        return [];
    }
    const array = [];
    array.push(head.val);
    while (head.next != null) {
        array.push(head.next.val);
        head = head.next;
    }
    return array;
}

const printTree = walkBstInOrder;
const printLinkedList = listToArray;

describe("#109. Convert Sorted List to Binary Search Tree", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${printLinkedList(input)} and output is ${printTree(output)}`, () => {
            assert.deepEqual(walkBstInOrder(resolve(input)), walkBstInOrder(output));
        });
    });
});