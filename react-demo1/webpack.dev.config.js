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
        }]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            redux: path.join(__dirname, 'src/redux')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, './dist')
    }
}