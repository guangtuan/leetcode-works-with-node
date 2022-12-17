var MyCalendar = function () {
    this.root = null
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.oldBook = function (start, end) {
    for (let { s, e } of this.ranges) {
        if (start === s) {
            return false
        }
        if (end === e) {
            return false
        }
        if (s < end && end < e) {
            return false
        }
        if (s <= start && start < e) {
            return false
        }
        if (start < s && e <= end) {
            return false
        }
    }
    this.ranges.push({
        s: start,
        e: end,
    })
    return true
}

let insert = (root, start, end) => {
    if (root.end <= start) {
        if (root.right === null) {
            root.right = {
                start: start,
                end: end,
                left: null,
                right: null,
            }
            return true
        } else {
            return insert(root.right, start, end)
        }
    } else if (root.start >= end) {
        if (root.left === null) {
            root.left = {
                start: start,
                end: end,
                left: null,
                right: null,
            }
            return true
        } else {
            return insert(root.left, start, end)
        }
    }
    return false
}

MyCalendar.prototype.book = function (start, end) {
    if (this.root === null) {
        this.root = {
            start: start,
            end: end,
            left: null,
            right: null,
        }
        return true
    } else {
        return insert(this.root, start, end)
    }
}

module.exports = MyCalendar
