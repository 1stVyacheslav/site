
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
				use: [ 'style-loader', 'css-loader' ]
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
	}


	// devServer: {
  //   contentBase: './dist'
	// },
	
	// devtool: 'inline-source-map',

}