var isSameTree = function (p, q) {
    // p and q are both null
    if (p == null && q == null) return true
    // one of p and q is null
    if (q == null || p == null) return false
    if (p.val != q.val) return false
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
}

module.exports = isSameTree
