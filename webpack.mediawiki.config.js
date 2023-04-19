const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/js/main.js',
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, 'src/mediawiki'),
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				allChunks: {
					name: 'main',
					chunks: 'all',
					enforce: true,
					test: /\.js$/,
				},
			},
		},
	},

	resolve: {
		extensions: ['.js', '.jsx', '.js.liquid'],
		alias: {
			'~vendor': path.resolve(__dirname, './src/js/vendor'),
			'~mod': path.resolve(__dirname, './src/js/modules'),
			'~comp': path.resolve(__dirname, './src/js/components'),
			'~rt': path.resolve(__dirname, './src/js/templates'),
			'~svg': path.resolve(__dirname, './images/icons'),
		},
	},

};
