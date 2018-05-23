输入 start end 产生 book，允许产生 double book，但是不允许产生 tripple book。

- s1 e1 表示输入
- SR ER 表示当前对照的节点

有以下情况

- e1 <= SR             r.left = {s1, e1}
- ER <= s1             r.right = {s1, e1}
- SR == s1 && ER == e1 r.count++
- ER == e1             r.count++, r.start = max(SR. s1), r.left = {SR, s1} or f(r.left, SR, s1)
- SR == s1             r.count++, r.end = min(ER, e1), r.right = {ER, e1} or f(r.right, ER, e1)


- e1 <= SR
```javaScript
r.left = {s1, e1}
```
- ER <= s1
```javaScript
r.right = {s1, e1}
```
- others:
```javaScript
if (left === right) {
    return true
}
r.count++;
leftStart = min(SR, s1);
leftEnd = max(SR, s1);
rightStart = min(ER, e1);
rightEnd = max(ER, e1);
r.left = leftEnd;
r.right = rightStart;
if (r.left) {
    f(r.left, leftStart, leftEnd);
} else {
    r.left = {leftStart, leftEnd, count: 1, left: null, right: null};
}
if (r.right) {
    f(r.right, rightStart, rightEnd);
} else {
    r.right = {rightStart, rightEnd, count: 1, left: null, right: null};
}
```