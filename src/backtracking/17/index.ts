function letterCombinations(digits: string): string[] {
    const n = digits.length
    const mapping = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ]

    if (n === 0) {
        return []
    }
    let ans: string[] = []
    let d = digits.split('').map((it) => Number.parseInt(it))

    const path = Array(n).fill('')
    // 使用递归来解决循环层数不确定的情况
    const dfs = (i: number) => {
        if (i === n) {
            // 走完的情况，写入答案
            ans.push(path.join(''))
        } else {
            for (let c of mapping[d[i]]) {
                // 对于这一层的按键里的每个元素，都加入路径
                path[i] = c
                // 向下递归
                dfs(i + 1)
            }
        }
    }
    dfs(0)
    return ans
}

module.exports = letterCombinations
