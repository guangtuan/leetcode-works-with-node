var MyCalendarTwo = function () {
    this.root = null;
};

var Node = function (count, start, end) {
    this.count = count;
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
}

let insert = (r, start, end) => {
    if (start === end) {
        return true;
    }
    if (r.end <= start) {
        if (r.right === null) {
            r.right = new Node(1, start, end);
            return true
        } else {
            return insert(r.right, start, end);
        }
    } else if (r.start >= end) {
        if (r.left === null) {
            r.left = new Node(1, start, end);
            return true
        } else {
            return insert(r.left, start, end);
        }
    } else if (r.count === 1) {
        r.count++;
        let leftStart = Math.min(r.start, start);
        let leftEnd = Math.max(r.start, start);
        let rightStart = Math.min(r.end, end);
        let rightEnd = Math.max(r.end, end);
        r.start = leftEnd;
        r.end = rightStart;
        if (r.left === null && r.right === null) {
            r.left = new Node(1, leftStart, leftEnd);
            r.right = new Node(1, rightStart, rightEnd);
            return true;
        } else if (r.left === null) {
            r.left = new Node(1, leftStart, leftEnd);
            return insert(r.right, rightStart, rightEnd);
        } else if (r.right === null) {
            r.right = new Node(1, rightStart, rightEnd);
            return insert(r.left, leftStart, leftEnd);
        } else {
            return insert(r.left, leftStart, leftEnd) && insert(r.right, rightStart, rightEnd);
        }
    }
    return false;
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    if (this.root === null) {
        this.root = new Node(1, start, end);
        return true;
    } else {
        return insert(this.root, start, end);
    }
};

module.exports = MyCalendarTwo;