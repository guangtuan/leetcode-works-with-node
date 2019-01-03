/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array = [];
    this.cursor = {};
};
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.array.length === 0) {
        this.array.push(x);
        this.cursor = {
            min: 0,
            preCursor: null
        };
        return;
    }
    this.array.push(x);
    const currentMinValue = this.array[this.cursor.min];
    if (currentMinValue > x) {
        this.cursor = {
            min: this.array.length - 1,
            preCursor: this.cursor
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.array.length - 1 === this.cursor.min) {
        this.cursor = this.cursor.preCursor;
    }
    return this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.array[this.cursor.min];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;