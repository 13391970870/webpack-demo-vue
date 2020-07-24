const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const DeadCodePlugin = require('webpack-deadcode-plugin');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  entry: {
    app: './src/renderer/index.js',
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: false
    }),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
      'Vue': 'vue'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join('node_modules/cesium/Build/Cesium', 'Workers'), to: 'Workers' },
        { from: path.join('node_modules/cesium/Source', 'Assets'), to: 'Assets' },
        { from: path.join('node_modules/cesium/Source', 'Widgets'), to: 'Widgets' },
        { from: path.join('public'), to: 'public' }
      ]
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('')
    }),
    new DeadCodePlugin({
      patterns: [
        'src/**/*.(js|jsx|css)',
      ],
      exclude: [
        '**/*.(stories|spec).(js|jsx)',
      ],
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '../src/renderer'),
      '@@': path.join(__dirname, '../public'),
      vue$: "vue/dist/vue.esm.js",
      'cesium': path.join(__dirname, '../node_modules/cesium'),
    }
  },
  module: {
    unknownContextCritical: false,
    rules: [{
        test: /\.html$/,
        use: 'vue-html-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      /*      {
              test: require.resolve('../src/index.js'),
              use: 'imports-loader?this=>window'
            },*/
      {
        test: path.resolve(__dirname, 'src'),
        use: 'exports-loader?file,parse=helpers.parse'
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader',
          options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
            formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
          }
        }],
        enforce: "pre", // 编译前检查
        exclude: /node_modules/, // 不检测的文件
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  performance: {
    hints: false
  }
}