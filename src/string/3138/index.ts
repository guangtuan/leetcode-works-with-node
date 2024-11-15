function minAnagramLength(s: string): number {
    const reRange = (str: string): string => str.split('').sort().join('')
    const subStringEqs = (step: number) => {
        const standard = reRange(s.substring(0, step))
        for (let i = step; i < s.length; i += step) {
            if (standard !== reRange(s.substring(i, i + step))) {
                return false
            }
        }
        return true
    }
    let n = s.length
    // 枚举所有 n 的因子，验证条件
    for (let anagramLength = 1; anagramLength <= n / 2; anagramLength++) {
        // 无法整除，肯定不是答案
        if (n % anagramLength !== 0) {
            continue
        }
        // 验证 string.splitWithLen(n) 是否都是同位字符串
        // 题目求的是最小值，因此当条件满足，直接返回
        if (subStringEqs(anagramLength)) {
            return anagramLength
        }
    }
    // fallback 的情况下，字符串本身长度是答案
    return s.length
}

module.exports = minAnagramLength
