// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pug = {
	test: /\.pug$/,
	use: ['html-loader?attrs=false', 'pug-html-loader']
};

const config = {
	// entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [pug]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.pug',
			inject: false
		})
	]
};
module.exports = config;