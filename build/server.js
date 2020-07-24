const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")
const path = require('path');

const app = express();
const router = express.Router();
const config = require('./webpack.dev.js');
const compiler = webpack(config);
const hotMiddleWare = require("webpack-hot-middleware")(compiler);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

let api = '/api/user';
let data = {
  name: 'user'
}

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-type', 'application/json;charset=utf-8')
  next()
})




app.get(api, (req, res) => {
  console.log('=====')
  console.log(req)
  console.log('=====')
  console.log(res)
  res.send(data)

});



app.set('port', '3000');
app.set('host', '192.168.1.180');


app.use('/public', express.static('public'))
// Serve the files on port 3000.
app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n');
});