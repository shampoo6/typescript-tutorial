# ts+webpack+vue配置问题

配置如下:

```js
module.exports = (env, params) => {
    return {
        ...
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                // 需要添加别名让 ts 检索 vue
                'vue': 'vue/dist/vue.esm-bundler.js',
                ...
            },
            fallback: {'path': require.resolve('path-browserify')}
        },
        module: {
            rules: [
                // ts-loader 配置
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options: {
                        // 需要让 ts-loader 去处理 .vue 文件
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },
                // 为了加载 vue 中的样式，需要添加如下loader
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            ...
            new VueLoaderPlugin()
        ]
    };
};
```