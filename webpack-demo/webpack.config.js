
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/js/test01.js',
        vendors: './src/js/test02.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        publicPath: './'
    },
    // resolve: {
    //     extensions: ['', '.js', '.css', '.html']
    // },
    module: {
		// loaders: [
		// 	{
		// 		test: /\.css$/,
		// 		loader: 'style!css'
		// 	}
		// ]
	},
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        
        new HtmlWebpackPlugin({
            chunks: ['common.js', 'app', 'vendors'],
            filename: './index.html',
            template: './src/index.html',
            inject: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "main",
                    chunks: "all"
                }
            }
        }
    }
}