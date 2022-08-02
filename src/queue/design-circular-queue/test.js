const assert = require("assert");
const MyCircularQueue = require("./src");

describe("", () => {
  it(`second`, () => {
    /**
     * ["MyCircularQueue","enQueue","deQueue","Front","deQueue","Front","Rear","enQueue","isFull","deQueue","Rear","enQueue"]
     * [[3],[7],[],[],[],[],[],[0],[],[],[],[3]]
     *
     * [null,true,true,-1,false,-1,-1,true,false,true,-1,true]
     */
    var circularQueue = new MyCircularQueue(3);
    assert.equal(true, circularQueue.enQueue(7));
    assert.equal(true, circularQueue.deQueue());
    assert.equal(-1, circularQueue.Front());
    assert.equal(false, circularQueue.deQueue());
    assert.equal(-1, circularQueue.Front());
    assert.equal(-1, circularQueue.Rear());
    assert.equal(true, circularQueue.enQueue(0));
    circularQueue.print();
    assert.equal(circularQueue.isFull(), false, "isFull");
    assert.equal(true, circularQueue.deQueue());
    assert.equal(-1, circularQueue.Rear());
    assert.equal(true, circularQueue.enQueue(3));
  });

  it(`first`, () => {
    var circularQueue = new MyCircularQueue(3);
    assert.equal(true, circularQueue.enQueue(1));
    assert.equal(true, circularQueue.enQueue(2));
    assert.equal(true, circularQueue.enQueue(3));
    assert.equal(false, circularQueue.enQueue(4));
    assert.equal(3, circularQueue.Rear());
    assert.equal(true, circularQueue.isFull());
    assert.equal(true, circularQueue.deQueue());
    assert.equal(true, circularQueue.enQueue(4));
    assert.equal(true, circularQueue.isFull());
    assert.equal(4, circularQueue.Rear());
    assert.equal(true, circularQueue.deQueue());
    assert.equal(true, circularQueue.deQueue());
    assert.equal(circularQueue.isEmpty(), false, "isEmpty");
    assert.equal(true, circularQueue.deQueue());
    assert.equal(false, circularQueue.deQueue());
    assert.equal(true, circularQueue.isEmpty());
  });
});
