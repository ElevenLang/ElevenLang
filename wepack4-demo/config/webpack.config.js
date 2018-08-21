// webpack v4
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 新加
const webpack = require('webpack');
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/app.js')
    },
    // entry: ['./src/index.js'],
    // entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
            },
            {
                test: /\.scss/,
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    },
                    { loader: 'sass-loader' }
                ]
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
        }),// 新加
        new webpack.HotModuleReplacementPlugin()
    ]
};
