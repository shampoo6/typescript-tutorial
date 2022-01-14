# ts+webpack路径别名问题

在 `js` 项目中，若要给路径取别名需要在 `webpack.config.js` 中设置，如下：

```js
// webpack.config.js

module.exports = {
    ...
    resolve: {
        alias: {
            '@': path.join(__dirname, './src')
        }
    },
    ...
}
```

在 `ts` 项目中除了设置 `webpack.config.js` 外，还要设置 `tsconfig.json`，如：

```json
{
  "compilerOptions": {
    ...
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
    ...
  }
}
```

> 请保证 `tsconfig.json` 中的 `paths` 属性下的 `key`，和 `webpack.config.js` `中的别名相对应，paths` 的 `value` 则为项目下的路径
