### 定义

> 每一个节点的左右子树深度相差不超过 1,则为平衡树.

### 关系

```javaScript
h(node) = Math.max(h(node.left), h(node.right)) + 1
```

对每一个元素都检查左右子树的高度差即可.