const MinStack = require('./index');
const assert = require('assert');

describe('test min stack', () => {
    it('', () => {
        var minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        assert.equal(-3, minStack.getMin());
        minStack.pop();
        assert.equal(0, minStack.top());
        assert.equal(-2, minStack.getMin());
    })

    it('', () => {
        var minStack = new MinStack();
        minStack.push(-1);
        assert.equal(minStack.top(), -1);
        assert.equal(minStack.getMin(), -1);
    })

    it('', () => {
        var minStack = new MinStack();
        minStack.push(0);
        minStack.push(1);
        minStack.push(0);
        assert.equal(0, minStack.getMin());
        minStack.pop();
        assert.equal(0, minStack.getMin());
    })
})