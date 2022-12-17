// console.log(JSON.stringify({h1, m1, num1, h2, m2, num2, delta}));
var convertTime = function (current, correct) {
    let delta = [current, correct]
        .map((s) => s.split(':').map((str) => Number.parseInt(str)))
        .map(([h, m]) => h * 60 + m)
        .reduce((m1, m2) => m2 - m1)
    let ret = 0
    for (let divider of [60, 15, 5, 1]) {
        let divided = Math.floor(delta / divider)
        delta = delta - divided * divider
        ret += divided
    }
    return ret
}

module.exports = convertTime
