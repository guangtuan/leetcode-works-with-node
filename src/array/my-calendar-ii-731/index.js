var MyCalendarTwo = function () {
  this.root = null;
};

let Node = function (start, end) {
  if (start === end) {
    return null;
  }
  return {
    overlaps: false,
    start: start,
    end: end,
    left: null,
    right: null
  }
}

let insert = (node, start, end) => {
  if (node === null) {
    return Node(start, end);
  }
  if (start >= end) {
    return node;
  }
  if (node.end <= start) {
    node.right = insert(node.right, start, end);
    return node;
  } else if (node.start >= end) {
    node.left = insert(node.left, start, end);
    return node;
  } else {
    node.overlaps = true;
    let leftStart = Math.min(node.start, start);
    let leftEnd = Math.max(node.start, start);
    let rightStart = Math.min(node.end, end);
    let rightEnd = Math.max(node.end, end);
    node.right = insert(node.right, rightStart, rightEnd);
    node.left = insert(node.left, leftStart, leftEnd);
    node.start = leftEnd;
    node.end = rightStart;
    return node;
  }
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  if (check(start, end, this.root)) {
    this.root = insert(this.root, start, end);
    return true;
  } else {
    return false;
  }
};

let check = (start, end, node) => {
  if (start >= end) {
    return true;
  }
  if (node === undefined || node === null) {
    return true;
  }
  if (start >= node.end) {
    return check(start, end, node.right);
  }
  if (end <= node.start) {
    return check(start, end, node.left);
  }
  if (node.overlaps) {
    return false;
  }
  if ((start >= node.start) && (end <= node.end)) {
    return true;
  }
  return (check(start, node.start, node.left)) && (check(node.end, end, node.right));
}

module.exports = MyCalendarTwo;