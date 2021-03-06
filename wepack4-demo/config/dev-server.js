const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');
// WebpackConfig.entry.unshift('webpack-dev-server/client?/', 'webpack/hot/dev-server');

WebpackConfig.entry.app = [
    // 'eventsource-polyfill',
    'webpack-dev-server/client?/',
    // 'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    WebpackConfig.entry.app
    // config.entry.app
  ];
const compiler = webpack(WebpackConfig);

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: true,
    port: 9090,
});

server.listen(9090, 'localhost', function (err) {
    if (err) throw err
})