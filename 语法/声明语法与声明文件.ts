// 有时我们要使用环境中已经存在的一些变量或函数
// 此时若直接使用 ts 会报错 应为并未声明
// 所以可以使用声明语法和声明文件进行定义
// 例如：由于 global.d.ts 定义了 __dirname 和 require 函数（都是node.js的全局属性），那么就可以在此处使用它们了

// 引入声明文件如下
/// <reference path="./global.d.ts" />

const path = require('path')
const descPath = path.join(__dirname, '../TypeScript简介.md')
console.log(descPath)
