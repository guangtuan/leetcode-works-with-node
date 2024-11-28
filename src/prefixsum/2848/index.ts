function numberOfPoints(nums: number[][]): number {
    const maxEnd = Math.max(...nums.map((it) => it[1]))
    const diff = nums.reduce((acc: number[], value: number[]): number[] => {
        const [start, end] = value
        acc[start] += 1
        acc[end + 1] -= 1
        return acc
    }, Array(maxEnd + 2).fill(0))
    return diff.reduce(
        (r: { ans: number; sumD: number }, value: number) => {
            r.sumD += value
            r.ans += r.sumD > 0 ? 1 : 0
            return r
        },
        { ans: 0, sumD: 0 },
    ).ans
}

module.exports = numberOfPoints
