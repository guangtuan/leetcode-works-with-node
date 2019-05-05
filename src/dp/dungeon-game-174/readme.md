M * N 的矩阵，每个矩阵都有数字，整数代表加血，负数代表减血。
从 (0, 0) 到 (m, n) 的过程中，血不能小于等于 0。

```js
f(n) = f(n - 1) + choice(n);
choice(n) = array[x][y + 1] || array[x+1][y];
```