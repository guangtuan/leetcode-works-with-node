var threeSum = function (nums) {
    var twoSum = function (n, t) {
        let target = -1 * t
        const deltaMap = {}
        let ret = []
        // 5
        // 12345
        // 1 delta[4] = 1
        // 2 delta[3] = 2
        // 3 -> 3,2
        for (let num of n) {
            const delta = target - num
            if (deltaMap[delta]) {
                ret.push([num, delta])
            } else {
                deltaMap[num] = true
            }
        }
        return ret
    }
    // 三个数的和为 0
    // 其中肯定同时包含正数(这里定义为包含0)和负数
    // 将数字按照正负分拨
    // 对于每一个负数，拿正数数组做 2sum 计算
    // 同理，对于每一个正数，拿负数数组做 2sum 计算
    let negs = []
    let poss = []
    let zeroCount = 0
    for (let n of nums) {
        if (n < 0) {
            negs.push(n)
        } else {
            if (n === 0) {
                zeroCount++
            }
            poss.push(n)
        }
    }
    let ret = []
    let hash = new Set()
    const getHash = (array) => array.sort((a, b) => a - b).join(',')
    if (zeroCount >= 3) {
        const toAdd = [0, 0, 0]
        ret.push(toAdd)
        hash.add(toAdd.sort().join(','))
    }
    function handleTuples(tuples, target) {
        tuples.forEach((tuple) => {
            const toAdd = [tuple[0], tuple[1], target]
            const h = getHash(toAdd)
            if (hash.has(h)) {
                return
            }
            ret.push(toAdd)
            hash.add(h)
        })
    }
    for (let target of new Set(negs)) {
        handleTuples(twoSum(poss, target), target)
    }
    for (let target of new Set(poss)) {
        handleTuples(twoSum(negs, target), target)
    }
    return ret
}

module.exports = threeSum
