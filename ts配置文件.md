# ts配置文件
官网：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

`tsconfig.json` 文件存在的目录表明该目录是 `TypeScript` 项目的根目录。该 `tsconfig.json` 文件指定了编译项目所需的根文件和编译器选项。

当成功配置了 `tsconfig.json` 后，就可以在项目根目录下运行 `tsc` 了，此时编译器会根据配置对项目进行编译

官方也提供了一些可选的推荐配置：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases

也可以参考 `webpack` 的 `ts` 配置：https://webpack.js.org/guides/typescript/