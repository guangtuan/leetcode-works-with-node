/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    const [l1, n1, _ig, l2, n2] = s.split('').map((str) => str.charCodeAt(0))
    return [...Array(l2 - l1 + 1)]
        .map((_ele, i) =>
            [...Array(n2 - n1 + 1)].map(
                (_ele, j) =>
                    `${String.fromCharCode(l1 + i)}${String.fromCharCode(
                        n1 + j,
                    )}`,
            ),
        )
        .flat()
}

module.exports = cellsInRange
