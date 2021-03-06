var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, "src", "r3test.js"),
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8081"
  ],

  output: {
    path: path.resolve(__dirname, "scripts"),
    publicPath: "/scripts/",
    filename: "r3test.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
	test: /\.js$/,
	loaders: ['react-hot', 'babel'],
	exclude: /node_modules/,
	include: path.join(__dirname, 'src')
      }
    ]
  }
}
