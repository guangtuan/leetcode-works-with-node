const assert = require('assert')
const resolve = require('./index')

const objects = [
    [4, 2, 5, 7],
    [1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 1],
    [1, 1, 1, 2, 2, 2],
    [2, 2, 2, 1, 3, 5],
    [11, 11, 22, 22, 4, 3, 5, 5, 5, 6, 6, 6],
]

const verify = (assert) => (arr) => {
    console.log(JSON.stringify(arr))
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i]
        assert.equal(i % 2, ele % 2)
    }
}

describe('#922. Sort Array By Parity II', () => {
    objects.forEach((object) => {
        it('', () => {
            verify(assert)(resolve(object))
        })
    })
})
