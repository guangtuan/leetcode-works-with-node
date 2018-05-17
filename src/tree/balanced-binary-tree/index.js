/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let attach = (root, depth, depths) => {
        if (root.left === null && root.right === null) {
            console.log(root.val);
            depths.push(depth);
        }
        if (root.left !== null) {
            attach(root.left, depth + 1, depths);
        }
        if (root.right !== null) {
            attach(root.right, depth + 1, depths);
        }
    }
    let depths = [];
    attach(root, 0 , depths);
    console.log(depths);
    return false;
};

module.exports = isBalanced;