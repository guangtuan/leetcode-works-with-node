纯粹是为了方便做题, 每道题的目录结构如下:

```bash
└── house-robber-198
    ├── index.js // 解法
    ├── readme.md // 思路
    └── test.js // 测试
```

用单元测试验证解法

```bash
npm run test
```

test 在 `package.json` 里面是 `mocha $(find src -name 'test.js')`, 如果要测试某一个题目, 将 src 替换为该题目的路径即可.