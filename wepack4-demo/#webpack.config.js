// webpack v4
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 新加

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['env'] // env转换es6 stage-0转es7 react转react
                    }
                }
            }, 
            {
                test: /\.css$/, // 转换文件的匹配正则
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/tpl/index.html',
            filename: 'index.html',
            title: 'test webpack'
        })// 新加

    ]
};
