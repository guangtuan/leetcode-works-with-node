/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null || root === undefined) {
    return true;
  }
  let getHeight = node => {
    if (node === null) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }

  let noBalanced = root => {
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return true;
    }
    if (root.left !== null) {
      let leftNoBalanced = noBalanced(root.left);
      if (leftNoBalanced) {
        return leftNoBalanced;
      }
    }
    if (root.right !== null) {
      let rightNoBalanced = noBalanced(root.right);
      if (rightNoBalanced) {
        return rightNoBalanced;
      }
    }
  }
  return !noBalanced(root);
};

module.exports = isBalanced;