function findPermutationDifference(s: string, t: string): number {
    const m1: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        m1[c] = i
    }
    const m2: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
        const c = t.charAt(i)
        m2[c] = i
    }
    let ans = 0
    for (let k of Object.keys(m1)) {
        ans += Math.abs(m1[k] - m2[k])
    }
    return ans
}
