/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // 左右端点同时出发，直到遇到元音，二者互换
    // 终止条件，l === r
    if (s.length <= 1) {
        return s
    }
    const range = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const arr = s.split('')
    let l = 0
    let r = arr.length - 1
    while (true) {
        while (!range.has(arr[l]) && l <= r) {
            l++
        }
        while (!range.has(arr[r]) && l <= r) {
            r--
        }
        if (l >= r) {
            return arr.join('')
        }
        ;[arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
}

module.exports = reverseVowels
