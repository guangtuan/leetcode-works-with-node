```js
g(n) = max(n - 1) % arr[n] === 0 || arr[n] % max(n - 1) === 0;
f(n) = g(n) ? f(n - 1).push(arr[n]) : f(n - 1);
max(n) = g(n) ? arr[n] : max(n - 1);
```

Example 1:

Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
Example 2:

Input: [1,2,4,8]
Output: [1,2,4,8]