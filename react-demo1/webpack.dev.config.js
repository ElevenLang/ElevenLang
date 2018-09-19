const path = require('path');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, '/src/index')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, './dist')
    },
    devtool: 'inline-source-map'
}