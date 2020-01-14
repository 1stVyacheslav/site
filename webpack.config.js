const HtmlWebpackPlugin = require('html-webpack-plugin'),
			MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) =>{

	const { mode = "development" } = env;

	const isProd = mode === 'production';
	const isDev = mode === 'development';

	function getStyleLoaders() {
		return [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			'css-loader'
		]
	}

	function getPlugins() {
		let plugins = [
			new HtmlWebpackPlugin( {
				title: 'Landing page',			
				template: 'public/index.html'
			} )
		];

		if (isProd) {
			plugins.push(
				new MiniCssExtractPlugin( {
					filename: 'main-[hash:8].css'
				})
			)
		}

		return plugins
	}

	return {
		mode: isProd ? 'production' : isDev && 'development',

		module: {
			rules: [

				//Loading scripts
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},

				//Loading CSS
				{
					test: /\.css$/,
					use: getStyleLoaders()
				},

				//Loading images
				{
					test: /\.(png|jpe?g|gif|ico|mp4)$/,
					use: [ {
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								name: '[name]-[sha1:hash:7].[ext]'
							}
						} ]
				}

			]
		},

		plugins: getPlugins()
	}

}