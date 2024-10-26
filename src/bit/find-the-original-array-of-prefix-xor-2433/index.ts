function findArray(pref: number[]): number[] {
    // a ^ b ^ b = a
    const ans = [pref[0]]
    for (let i = 0; i < pref.length - 1; i++) {
        ans.push(pref[i] ^ pref[i + 1])
    }
    return ans
}

module.exports = findArray
