const HtmlWebpackPlugin = require('html-webpack-plugin'),
			MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',

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
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},

			//Loading images
			{
				test: /\.(png|jpe?g|gif|ico)$/,
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

	plugins: [
		new HtmlWebpackPlugin( {
			title: 'Landing page',			
			template: 'public/index.html'
		} ),

		new MiniCssExtractPlugin( {
			filename: 'main-[hash:8].css'
		})
	],

	// devServer: {
  //   contentBase: './src'
	// },
	
	// devtool: 'inline-source-map',

}