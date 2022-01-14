# ts+webpack引入文件问题

`js` + `webpack` 项目中引入文件仅需使用 `file-loader` 即可，但在 `ts` + `webpack` 项目中，带有后缀名的文件将被当作 `js` 模块解析，所以常常会得到一个无法处理模块的错误

遇到这种问题，请在项目 `src` 文件夹下，添加一个自定义定义文件，如：

```ts
// 此处以引入图片文件为例，该文件是名为 image.d.ts 的定义文件
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
```

这样一来就可以在其他模块中，像 `js` 中一样引入图片文件了，例如：

```ts
import bg from '@/assets/bg.jpg'
```
