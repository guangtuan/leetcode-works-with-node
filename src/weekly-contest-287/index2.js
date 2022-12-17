/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const playerToWinCount = {}
    const playerToLostCount = {}
    for (let match of matches) {
        const [winner, loser] = match
        playerToWinCount[winner] = (playerToWinCount[winner] || 0) + 1
        playerToLostCount[loser] = (playerToLostCount[loser] || 0) + 1
    }
    let winners = Object.keys(playerToWinCount)
    let losers = Object.keys(playerToLostCount)
    let ret1 = winners
        .filter((w) => !(w in playerToLostCount))
        .map((str) => Number.parseInt(str))
    let ret2 = losers
        .filter((l) => playerToLostCount[l] === 1)
        .map((str) => Number.parseInt(str))
    ret1.sort((n1, n2) => n1 - n2)
    ret2.sort((n1, n2) => n1 - n2)
    return [ret1, ret2]
}

module.exports = findWinners
