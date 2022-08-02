/**
 * @param {number} k

 [] <3>
 [1]
 [1, 2]
 [1,2,3]
 enQueue(4) // false
 rear -> 3
 isFull -> true
 deQueue() // delete 1
 enQueue(4) [4, 2, 3]
 rear 4
 */
var MyCircularQueue = function (k) {
    this.arr = []
    this.arr.length = k
    this.tail = k - 1
    this.head = 0
};

MyCircularQueue.prototype.circle = function (val) {
    if (val === this.arr.length - 1) {
        return 0;
    } else {
        return val + 1;
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    const nextIndex = this.circle(this.tail);
    if (this.arr[nextIndex] !== undefined) {
        return false;
    } else {
        this.arr[nextIndex] = value;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.arr[this.head] === undefined) {
        return false;
    }
    this.arr[this.head] = undefined;
    this.head = this.circle(this.head);
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.arr[this.head] === undefined) {
        return -1;
    }
    return this.arr[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.arr[this.tail] === undefined) {
        return -1;
    }
    return this.arr[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.arr[this.head] === undefined &&
        this.arr[this.tail] === undefined
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.arr[this.head] !== undefined &&
        this.arr[this.tail] !== undefined
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
