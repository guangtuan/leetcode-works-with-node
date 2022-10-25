/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    // 从左右两边开始，向中间遍历 l++, r--，判断是否一样
    // 如果遇到不一样，则使用删除机会
    // 机会用完，返回 false
    // l === r 或者 l 和 r 差一，则返回 true
    return create("l")(s) || create("r")(s);
};

function create(dir) {
    return function (s) {
        let l = 0
        let r = s.length - 1
        let use = false
        while ((r - l) >= 0) {
            if (s.charAt(l) === s.charAt(r)) {
                l++;
                r--;
            } else {
                if (use) {
                    return false;
                }
                if (dir === "l") {
                    if (s.charAt(l) === s.charAt(r - 1)) {
                        r--;
                    } else if (s.charAt(l + 1) === s.charAt(r)) {
                        l++;
                    } else {
                        return false;
                    }
                } else {
                    if (s.charAt(l + 1) === s.charAt(r)) {
                        l++;
                    } else if (s.charAt(l) === s.charAt(r - 1)) {
                        r--;
                    } else {
                        return false;
                    }
                }
                use = true
            }
        }
        return true;
    }
}

module.exports = validPalindrome;