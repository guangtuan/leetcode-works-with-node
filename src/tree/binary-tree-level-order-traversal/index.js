var levelOrder = function (root) {
    const colletors = []
    function walk(cursors) {
        if (cursors.length === 0) {
            return
        }
        const next = []
        const currentLevel = []
        for (let cursor of cursors) {
            currentLevel.push(cursor.val)
            if (cursor.left !== null) {
                next.push(cursor.left)
            }
            if (cursor.right !== null) {
                next.push(cursor.right)
            }
        }
        colletors.push(currentLevel)
        walk(next)
    }
    if (root !== null) {
        walk([root])
    }
    return colletors
}

// colletors.push(cursors.map(({ val }) => val));
// walk(cursors
//     .map(({ left, right }) => ([left, right]))
//     .reduce((acc, currentArray) => acc.concat(currentArray), [])
//     .filter(_ => _ !== null)
// );

module.exports = levelOrder
