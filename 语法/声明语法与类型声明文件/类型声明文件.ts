// 知识点
// 什么是类型声明文件
// 应用场景
// 书写类型声明文件
// 书写模块类型声明文件
// @types


// 什么是类型声明文件
// 一个用于定义js模块中都包含什么类型的内容的文件，通常以 `.d.ts` 结尾


// 应用场景
// 常用场景有两个
// 1. 定义全局类型声明文件，用来声明一些不需要 ts 关心的内容，通常文件名为 global.d.ts
// 2. 给模块添加声明定义，让其他人引用后，使用模块时能有代码提示


// 书写类型声明文件
// 在不经过任何处理的情况下 ts 无法识别 node.js 的全局变量 __filename __dirname
// 所以我们创建一个 global.d.js
// 引入定义文件
/// <reference path="global.d.ts" />

console.log(__filename);
console.log(__dirname);




// 书写模块类型声明文件
// 也可以为自己的模块书写对应的声明文件
// 声明文件默认情况下应该与模块放在相同目录下
// 声明文件的名字通常和模块的名字相同，然后后缀名加上 .d.ts
// 例如: module1.ts 模块 那么类型声明文件就是 module1.d.ts

// 引入自己项目下的模块时，无需使用 /// <reference path="..." /> 引入
// 所以 module1.d.ts 是提供给其他模块使用的
// 此处可以参考 《otherModule》 项目中 对 module1 的引入
import {msg, sayMessage} from './modules/module1.js'

console.log(msg);
sayMessage('hello world')



// @types
// 很多库的声明文件都被转移到了 @types 上，例如: jquery express moment 等
// 需要代码提示的使用，可以使用 npm 命令 安装对应的 .d.ts 声明文件
// npm 命令如下
// npm i -D @types/express
// express 只是个例子，可以替换成其他的 npm 模块名