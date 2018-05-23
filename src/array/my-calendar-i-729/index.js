var MyCalendar = function () {
    this.ranges = []
};

MyCalendar.createNew = function () {
    return new MyCalendar()
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    for (let { s, e } of this.ranges) {
        if (start === s) {
            return false;
        }
        if (end === e) {
            return false;
        }
        if (s < end && end < e) {
            return false;
        }
        if (s <= start && start < e) {
            return false;
        }
        if (start < s && e <= end) {
            return false;
        }
    }
    this.ranges.push({
        s: start,
        e: end
    });
    return true;
};

module.exports = MyCalendar;