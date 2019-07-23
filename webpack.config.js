// var config = {
// 	entry: './main.js',
// 	output: {
// 		path: __dirname + '/',
// 		filename: 'index.js',
// 	},
// 	devServer: {
// 		inline: true,
// 		port: 8080
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.jsx?$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: 'babel-loader',
// 				},
// 			}
// 		]
// 	}
// };

// module.exports = config;

//    -------   ---------   ---         -----       -----     ------    //

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'index_bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
