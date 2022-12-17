### Train of thought

```javaScript
f(0) = a[0];
f(1) = getMax(a[0], a[1]);
f(2) = getMax(f(1), f(0) + a[2]);
f(3) = getMax(f(2), f(1) + a[3]);
f(4) = getMax(f(3), f(2) + a[4]);
f(5) = getMax(f(4), f(3) + a[5]);
f(n) = getMax(f(n - 1), a[n] + a[n -2]);
```

### reference

-   [house-robber](https://leetcode.com/problems/house-robber/description/)
