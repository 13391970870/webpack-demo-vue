const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const path = require('path');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true';


module.exports = merge(common, {
  entry: {
    app: ['./src/renderer/index.js', hotMiddlewareScript],
    /*app: './src/index.js',*/
  },
  devtool: 'inline-source-map', //反向映射编译后的代码方便测试

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true,
    host: 'localhost',
    port: '8080',
    useEslint: true,
  }, //提供了一个简单的 web 服务器，并且能够实时重新加载
  output: {
    filename: path.posix.join('static','[name].[hash].js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: "development",
})