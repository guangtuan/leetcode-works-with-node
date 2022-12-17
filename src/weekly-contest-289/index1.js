/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    const part = (arr) => {
        let ret = []
        let partCount = Math.floor(arr.length / k)
        if (arr.length % k !== 0) {
            partCount = partCount + 1
        }
        for (let i = 0; i < partCount; i = i + 1) {
            let curr = []
            for (let j = 0; j < k; j++) {
                let arrElement = arr[i * k + j]
                if (arrElement !== undefined) {
                    curr.push(arrElement)
                }
            }
            ret.push(curr)
        }
        return ret
    }
    let ret = s
    while (ret.length > k) {
        ret = part(ret.split(''))
            .map((n) =>
                n
                    .map((c) => Number.parseInt(c))
                    .reduce((acc, curr) => acc + curr, 0),
            )
            .join('')
    }
    return ret
}

module.exports = digitSum
