const path = require('path');
const webpack = require('webpack');

let startProgress = null;
const progressHandler = (percentage) => {
	if (percentage === 0) {
		startProgress = new Date();
		console.info('Starting webpack build');
	}
	if (percentage === 1) {
		const endProgress = new Date();
		const seconds = (endProgress.getTime() - startProgress.getTime()) / 1000;
		console.info(`Finished webpack build - ${seconds.toFixed(2)}s`);
	}
};

const webpackCfg = {
	mode: 'development',
	// devtool: false,
	watchOptions: {
		aggregateTimeout: 600,
		ignored: ['**/vendor/*', '**/node_modules'],
	},
	entry: {
		lazyload: './src/js/lazyload.js',
		main: './src/js/main.js',
	},
	output: {
		filename: '[name].js',
		chunkFilename: 'chunk.[name].js?h=[contenthash]',
		path: path.resolve(__dirname, 'dist/js'),
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
	module: {
		rules: [
			{
				test: /\.(js|jsx|js.liquid)?$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { babelrc: true },
				}],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	plugins: [new webpack.ProgressPlugin(progressHandler)],
};

module.exports = webpackCfg;
