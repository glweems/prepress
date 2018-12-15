const path = require('path');
const {
	VueLoaderPlugin
} = require('vue-loader')

module.exports = {
	mode: 'development',
	resolve: {
		extensions: ['.js', '.vue', '.json', 'sass'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('./src'),
		}
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: ['vue-loader'],
		}]
	},

	plugins: [
		new VueLoaderPlugin()
	]
}
// module.exports = config