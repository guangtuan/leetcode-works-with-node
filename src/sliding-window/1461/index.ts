// [0, 1, 2... 2**k-1] 这里的数字都需要出现在 s 中
// s 以 k 为定长的窗口移动，得出对应的数字
const hasAllCodes = (s: string, k: number): boolean => {
    const determine = (c: string) => (c === '1' ? 1 : 0)
    const expectSize = 1 << k
    const mask = (1 << (k - 1)) - 1
    const result = new Set<number>()
    let window = 0
    for (let i = 0; i < s.length; i++) {
        // 循环的开始 窗口.size === k - 1
        window = (window << 1) | determine(s.charAt(i)) // 新元素进入窗口
        if (i < k - 1) {
            continue
        }
        result.add(window) // 此时窗口.size === k
        window = window & mask // leading 元素离开窗口
    }
    return expectSize === result.size
}

const hasAllCodes2 = (s: string, k: number): boolean => {
    const mask = (1 << (k - 1)) - 1
    const { ns } = s
        .split('')
        .map((it: string): number => (it === '1' ? 1 : 0))
        .reduce(
            (
                acc: { window: number; ns: Set<number> },
                value: number,
                index: number,
            ) => {
                // 窗口.size === k - 1
                const window = (acc.window << 1) | value // 新元素进入窗口
                if (index < k - 1) {
                    return { window, ns: acc.ns }
                }
                acc.ns.add(window)
                // leading 元素离开窗口
                return { window: window & mask, ns: acc.ns }
            },
            { window: 0, ns: new Set<number>() },
        )
    return 1 << k === ns.size
}

module.exports = { hasAllCodes, hasAllCodes2 }
