const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩代码插件

const UselessFile = require('useless-files-webpack-plugin')

/*就是babel-loader先去处理js文件，处理过后，webpack进行打包处理，最后uglifyjs进行代码压缩。而关键就是babel怎么去处理js文件*/


module.exports = merge(common, {
  entry: {
    app: './src/renderer/index.js',
    /*
        cesium: './public/plugins/Cesium.js'*/
  },
  //多个入口之间同时使用某个依赖则生效
  optimization: {
    // 找到chunk中共享的模块,取出来生成单独的chunk
    splitChunks: {
      chunks: "all", // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
      cacheGroups: {
        vendors: { // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
          name: "vendors",
          priority: -10 // 抽取优先级
        },
        utilCommon: { // 抽离自定义工具库
          name: "common",
          minSize: 0, // 将引用模块分离成新代码文件的最小体积
          minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
          priority: -20
        }
      }
    },
    // 为 webpack 运行时代码创建单独的chunk
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new UselessFile({
      root: './src', // 项目目录
      out: './fileList.json', // 输出文件列表
      clean: false, // 删除文件,
      exclude: path // 排除文件列表, 格式为文件路径数组
    })
  ],
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  mode: "production",
})