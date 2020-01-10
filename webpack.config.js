
module.exports = {
	mode: 'development',

	entry: './path/to/my/entry/file.js',

	output: {
    path: './dist',
    filename: 'index.js'
  },

	devServer: {
    contentBase: './dist'
	},
	
	devtool: 'inline-source-map',

	rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}
  ]
}