/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 *
 * - 时刻 t = 1 ，每辆公交车完成的旅途数分别为 [1,0,0] 。
 已完成的总旅途数为 1 + 0 + 0 = 1 。
 - 时刻 t = 2 ，每辆公交车完成的旅途数分别为 [2,1,0] 。
 已完成的总旅途数为 2 + 1 + 0 = 3 。
 - 时刻 t = 3 ，每辆公交车完成的旅途数分别为 [3,1,1] 。
 已完成的总旅途数为 3 + 1 + 1 = 5 。
 // 超出的case
 - 时刻 t = 4 ，每辆公交车完成的旅途数分别为 [4,2,1] 。
 已完成的总旅途数为 4 + 2 + 1 = 7 。
 */
var minimumTime = function (time, totalTrips) {
    let left = 0
    let right = Math.min(...time) * totalTrips
    const cal = (count, time) => {
        let ret = 0
        for (let t of time) {
            let forOneCar = Math.floor(count / t)
            ret += forOneCar
        }
        return ret
    }
    while (left < right) {
        if (left === right) {
            while (left > 0 && cal(left, time) >= totalTrips) {
                left--
            }
            return left + 1
        }
        if (right - left === 1) {
            if (cal(left, time) >= totalTrips) {
                return left
            }
            while (cal(right, time) < totalTrips) {
                right++
            }
            return right
        }
        let middle = Math.floor((left + right) / 2)
        if (cal(middle, time) < totalTrips) {
            left = middle + 1
        } else {
            right = middle
        }
    }
    return left
}

module.exports = minimumTime
