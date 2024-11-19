function vowelStrings(words: string[], queries: number[][]): number[] {
    const startAndEndWithVowel = (s: string): boolean =>
        'aeiou'.includes(s.charAt(0)) &&
        'aeiou'.includes(s.charAt(s.length - 1))
    const cnt = words.map((it) => (startAndEndWithVowel(it) ? 1 : 0))
    const sum = [cnt[0]]
    for (let i = 1; i < cnt.length; i++) {
        sum[i] = sum[i - 1] + cnt[i]
    }
    return queries.map((q: number[]): number => {
        const [l, r] = q
        return sum[r] - (sum[l - 1] | 0)
    })
}

module.exports = vowelStrings
